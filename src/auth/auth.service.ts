import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { registerAuthDto } from './dto/register-auth.dto';
import { loginAuthDto } from './dto/login-auth.dto';
import { Otp } from './entities/otp.entity';
import { EmailService } from 'src/email/email.service';
import { CustomJwtService } from 'src/common/custom-jwt/custom-jwt.service';
import * as bcrypt from 'bcrypt';
import { verificationAuthDto } from './dto/verification-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(User) private otpRepository: Repository<Otp>,
    private readonly emailService: EmailService,
    private readonly customJwtService: CustomJwtService,
  ) {}
  async register(registerAuthDto: registerAuthDto) {
    const currentUser = await this.userRepository.findOne({
      where: { email: registerAuthDto.email },
    });
    if (currentUser) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }
    const salt = await bcrypt.genSalt();
    registerAuthDto.password = await bcrypt.hash(
      registerAuthDto.password,
      salt,
    );
    const otp = Math.floor(Math.random() * 100000) + 1;
    await this.emailService.sendActivedOtp(registerAuthDto.email, 'otp', otp);
    const user = this.userRepository.create(registerAuthDto);
    await this.userRepository.save(user);
    const otpEntity = this.otpRepository.create({
      email: registerAuthDto.email,
      otp_code: otp,
      expire_at: new Date(Date.now() + 10 * 60 * 1000),
    });
    await this.otpRepository.save(otpEntity);
    return { status: HttpStatus.CREATED, message: 'Created' };

    return;
  }

  async login(loginAuthDto: loginAuthDto) {
    const currentUser = await this.userRepository.findOne({
      where: { email: loginAuthDto.email },
    });
    if (!currentUser) {
      throw new HttpException('User NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    if (currentUser.is_active === false) {
      throw new HttpException('User Is Not Actived', HttpStatus.UNAUTHORIZED);
    }
    const isEqual = await bcrypt.compare(
      loginAuthDto.password,
      currentUser.password,
    );
    if (!isEqual) {
      throw new HttpException(
        'You have entered an invalid username or password',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const accessToken =
      await this.customJwtService.generateAccessToken(currentUser);
    const refreshToken =
      await this.customJwtService.generateRefreshToken(currentUser);
    return { refreshToken, accessToken };
  }

  async verification(verificationData: verificationAuthDto) {
    const currentUser = await this.userRepository.findOne({
      where: { email: verificationData.email },
    });
    if (!currentUser) {
      throw new HttpException('User NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    const currentOtp = await this.otpRepository.findOne({
      where: { email: verificationData.email },
    });
    if (!currentOtp) {
      throw new HttpException('invalid otp', HttpStatus.UNAUTHORIZED);
    }
    if (new Date() > currentOtp.expire_at) {
      throw new HttpException('invalid otp', HttpStatus.UNAUTHORIZED);
    }
    if (currentOtp.otp_code !== +verificationData.otp_code) {
      throw new HttpException('invalid otp', HttpStatus.UNAUTHORIZED);
    }
    await this.otpRepository.remove(currentOtp);
    currentUser.is_active = true;
    await this.userRepository.save(currentUser);
    return { status: HttpStatus.OK, message: 'User is Actived' };
  }
}
