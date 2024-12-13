import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../model/user.model';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-auth.dto';
import { CreateUserDto } from './dto/create-auth.dto';
import { HttpStatus } from '@nestjs/common';
import { IUpdatePasswordDto } from 'src/interface/interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('users') private userModel: Model<Users>,
    @Inject('AUTH_REPOSITORY') private readonly authRepository: any,
  ) {}
  async registerService(data: CreateUserDto): Promise<Object> {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (currentUser) {
      throw new HttpException('bu email bazada mavjud', HttpStatus.NOT_FOUND);
    }
    const hashPass = await await this.authRepository(data)
    data.password = hashPass;
    const newUser = new this.userModel(data);
    await newUser.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async loginService(data: UpdateUserDto): Promise<Object> {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const isEqual = await bcrypt.compare(data.password, currentUser.password);
    if (!isEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const payload = { id: currentUser.id, sub: currentUser.email };
    const accessToken = await this.authRepository.generateAccessToken(payload);
    const refreshToken = await this.authRepository.generateRefreshToken(payload);
    return { refreshToken, accessToken };
  }

  async updatePass(id: string, data: IUpdatePasswordDto): Promise<Object> {
    const currentUser = await this.userModel.findById(id);
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const isEqual = await bcrypt.compare(
      data.oldPassword,
      currentUser.password,
    );
    if (!isEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const hashPass = await this.authRepository(data)
    const user = await this.userModel.findByIdAndUpdate(id, {
      password: hashPass,
    });
    return { status: HttpStatus.OK, message: 'Success' };
  }
}
