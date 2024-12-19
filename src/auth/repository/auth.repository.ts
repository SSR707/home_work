import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { forgetPass, user_payload, verifytoken } from 'src/interface/interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { generateOTP } from 'src/common/otp/otp-generate';
import { Otp } from 'src/model/otp.model';
import { loginUserDto } from '../dto/login-auth.dto';
import { UserRepository } from 'src/user/repository/user.repository';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerService } from '@nestjs-modules/mailer';
import { sendMail } from 'src/email/sendMail';
export class AuthRepository {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    @InjectModel(Otp) private readonly otpModel: typeof Otp,
    private readonly jwtService: JwtService,
    private readonly milerModeule: MailerService,
  ) {}
  async register(CreateAuthDto: CreateUserDto) {
    const currentUser = await this.userModel.findOne({
      where: { email: CreateAuthDto.email },
    });
    if (currentUser) {
      throw new HttpException('CONFLICT', HttpStatus.CONFLICT);
    }
    CreateAuthDto.password = await this.hashPass(CreateAuthDto.password);
    const otp = generateOTP();
    await sendMail(this.milerModeule, CreateAuthDto.email, 'Otp', `${otp}`);
    console.log(CreateAuthDto);
    const user = await this.userModel.create(
      { ...CreateAuthDto },
      {
        returning: true,
      },
    );

    await this.otpModel.create({
      user_id: user.id,
      otp: otp,
      expire_in: new Date(Date.now() + 10 * 60 * 1000),
    });
    return { status: HttpStatus.CREATED, message: 'Created' };
  }
  async login(loginDto: loginUserDto) {
    const currentUser = await this.userModel.findOne({
      where: { email: loginDto.email },
    });
    if (!currentUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    if (currentUser.is_Active === false) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const isEqual = await bcrypt.compare(
      loginDto.password,
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
    const accessToken = await this.accessToken(payload);
    const refreshToken = await this.refreshToken(payload);
    return { accessToken, refreshToken };
  }

  async verifytoken(data: verifytoken) {
    console.log(data)
    const currentUser = await this.userModel.findOne({
      where: { email: data.email },
    });
    if (!currentUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    const currentOtp = await this.otpModel.findOne({
      where: { user_id: currentUser.id },
    });
    if (!currentOtp) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    if (currentOtp.otp !== data.otp) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
    if (new Date() > currentOtp.expire_in) {
      throw new HttpException('Otp Time Out', HttpStatus.CONFLICT);
    }
    await this.userModel.update(
      { is_Active: true },
      {
        where: { id: currentUser.id },
        returning: true,
      },
    );
    return { status: 200, message: 'User Is Activete' };
  }

  async ForgetPassword(id: number, data: forgetPass) {
    const user = await this.userModel.findByPk(id);
    const isEqual = await bcrypt.compare(data.oldPassword, user.password);
    if (!isEqual) {
      throw new HttpException('Eski Parol Hato', HttpStatus.UNAUTHORIZED);
    }
    const hashPass = await this.hashPass(data.newPassword);
    await this.userModel.update({ password: hashPass }, { where: { id } });
    return { status: HttpStatus.OK, message: 'Password updated' };
  }
  async accessToken(payload: user_payload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.ACCESS_SECRET,
      expiresIn: process.env.ACCESS_EXPIRES_IN,
    });
  }

  async refreshToken(payload: user_payload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET,
      expiresIn: process.env.REFRESH_EXPIRES_IN,
    });
  }

  async hashPass(password: string) {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    return pass;
  }
}
