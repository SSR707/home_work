import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { loginUserDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('users') private userModel: Model<User>) {}
  async register(createAuthDto: CreateUserDto) {
    const current = await this.userModel.findOne({ email: createAuthDto.email });
    if (current) {
      throw new HttpException('CONFLICT', HttpStatus.CONFLICT);
    }
    const user = new this.userModel(createAuthDto);
    await user.save();
    return { status: 201, message: 'Created' };
  }

  async login(loginAuthDto: loginUserDto) {
    const user = await this.userModel.findOne({ email:loginAuthDto.email });
    if (!user) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    if (user.password !== loginAuthDto.password) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return { status: 200, message: 'login' };
  }
}
