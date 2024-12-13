import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { ErrorException } from './entities/error.excaption';
import { CreateAuthDto } from './dto/create-auth.dto';
import { user_login } from 'src/interface/interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('users') private userModel: Model<User>,
    @Inject('AUTH_REPO') private readonly authRepository: any,
  ) {}

  async register(data: CreateAuthDto) {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (currentUser) {
      throw new HttpException(
        ErrorException.CONFLICT().message,
        ErrorException.CONFLICT().statusCode,
      );
    }
    data.password = await this.authRepository.hashPass(data);
    const user = new this.userModel(data);
    await user.save();
    return {
      status: ErrorException.CREATED().statusCode,
      message: ErrorException.CREATED().message,
    };
  }

  async login(data: user_login) {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (!currentUser) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    const isEqual = await bcrypt.compare(data.password, currentUser.password);
    if (!isEqual) {
      throw new HttpException(
        ErrorException.UNAUHTORIZED().message,
        ErrorException.UNAUHTORIZED().statusCode,
      );
    }
    const payload = { id: currentUser.id, sub: currentUser.email };
    const accessToken = await this.authRepository.accessToken(payload);
    const refreshToken = await this.authRepository.refreshToken(payload);
    return { accessToken, refreshToken };
  }
}
