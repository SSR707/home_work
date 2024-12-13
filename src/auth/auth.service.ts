import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Model } from 'mongoose';
import { User } from 'src/model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel('users') private userModel: Model<User>,
    @Inject('AUTH_REPO') private readonly authRepository: any,
  ) {}

  async register(data: User) {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (currentUser) {
      throw new HttpException('Not', HttpStatus.UNAUTHORIZED);
    }
    data.password = await this.authRepository.hashPass(data);
    const user = new this.userModel(data);
    await user.save();
    return { status: HttpStatus.CREATED, message: 'Crweatesd' };
  }

  async login(data) {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const isEqual = await bcrypt.compare(data.password, currentUser.password);
    if(!isEqual){
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const payload = {id:currentUser.id , sub:currentUser.email}
    const accessToken = await this.authRepository.accessToken(payload)
    const refreshToken = await this.authRepository.refreshToken(payload)
    return {accessToken , refreshToken}
  }
}
