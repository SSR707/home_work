import { HttpException, Injectable } from '@nestjs/common';
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
  constructor(@InjectModel('users') private userModel: Model<Users>) {}
  async registerService(data: CreateUserDto): Promise<Object> {
    const currentUser = await this.userModel.findOne({ email: data.email });
    if (currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(data.password, salt);
    data.password = hashPass;
    const newUser = new this.userModel(data);
    await newUser.save();
    return { status: HttpStatus.CREATED, message:'Created' };
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
    return              
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
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(data.newPassword, salt);
    const user = await this.userModel.findByIdAndUpdate(id, {
      password: hashPass,
    });
    return { status: HttpStatus.OK, message:'Success' };
  }
}
