import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { MailerModule } from '../email/sendMail';
import * as bcrypt from 'bcrypt';
import { generateOtp } from 'src/common/otp/otp-generate';
import { AuthRepository } from './repository/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPO') private readonly authRepository: AuthRepository,
    private readonly milerModeule: MailerModule,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const currentUser = await this.authRepository.current(createAuthDto.email);
    if (!currentUser) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    createAuthDto.password = await this.authRepository.hashPass(
      createAuthDto.password,
    );
    const otp = await generateOtp();
    await this.milerModeule.sandMail(createAuthDto.email, 'Otp', `${otp}`);
    const id = await this.authRepository.insertUser(createAuthDto);
    await this.authRepository.insertOtp(id, otp);
    return { status: HttpStatus.CREATED, message: 'CREATED' };
  }

  async login(loginAuthDto: UpdateAuthDto) {
    const currentUser = await this.authRepository.current(loginAuthDto.email);
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    if (currentUser.is_Active === false) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const isEqual = await bcrypt.compare(
      loginAuthDto.password,
      currentUser.password,
    );
    if (!isEqual) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const payload = {
      id: currentUser.id,
      sub: currentUser.email,
      role: currentUser.role,
    };
    const accessToken = await this.authRepository.accessToken(payload);
    const refreshToken = await this.authRepository.refreshToken(payload);
    return { accessToken, refreshToken };
  }

  async varifyOtp(otpAuthDto: any) {
    const currentUser = await this.authRepository.current(otpAuthDto.email);
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const currentOtp = await this.authRepository.currentOtp(otpAuthDto.id);
    if (otpAuthDto.otp !== currentOtp.otp) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
    if (new Date() > currentOtp.expire_at) {
      throw new HttpException('CONFLICT', HttpStatus.CONFLICT);
    }
    // await this.authRepository.updateUser();
    // return { status: 200, message: 'User Is Actived' };
  }
}
