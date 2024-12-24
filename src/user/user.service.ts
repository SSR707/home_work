import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModel: Model<User>) {}

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return { sataus: 200, user };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const curretUser = await this.userModel.findOne({ _id: id });
    if (!curretUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    const newUser = { ...curretUser, ...updateUserDto };
    await this.userModel.findByIdAndUpdate(id, newUser);
    return { sataus: 200, id: id };
  }

  async remove(id: string) {
    const curretUser = await this.userModel.findOne({ _id: id });
    if (!curretUser) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    await this.userModel.findByIdAndDelete(id);
    return { sataus: 200, id: id };
  }
}
