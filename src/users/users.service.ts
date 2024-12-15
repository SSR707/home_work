import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/model/user.model';
import { ErrorException } from '../auth/entities/error.excaption';
@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private userModel: Model<User>) {}

  async findProfile(id:string){
    const user = await this.userModel.findOne({_id:id})
    return user
  }
  async findAll() {
    const user_data = await this.userModel.find();
    if (!user_data) {
      throw new HttpException(
        ErrorException.NO_CONTENT().message,
        ErrorException.NO_CONTENT().statusCode,
      );
    }
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      user_data,
    };
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      user,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const currentUser = await this.userModel.findOne({ _id: id });
    if (!currentUser) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    if (updateUserDto.password) {
      throw new HttpException(
        ErrorException.UNAUHTORIZED().message,
        ErrorException.UNAUHTORIZED().statusCode,
      );
    }
    const new_user_data = { ...currentUser, ...updateUserDto };
    await this.userModel.findByIdAndUpdate(id, new_user_data);

    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      id,
    };
  }

  async remove(id: string) {
    const currentUser = await this.userModel.findOne({ _id: id });
    if (!currentUser) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    await this.userModel.findByIdAndDelete(id);
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      id,
    };
  }
}
