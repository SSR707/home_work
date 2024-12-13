import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../model/user.model';
import { UpdateUserDto } from './dto/update-auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModel: Model<Users>) {}

  async getProfileService(user: any): Promise<Object> {
    const data = await this.userModel.findOne({ _id: user.id });
    return { status: HttpStatus.OK, data };
  }

  async getAllService(): Promise<Object> {
    const data = await this.userModel.find();
    return { status: HttpStatus.OK, data };
  }

  async getByIdService(id: string): Promise<Object> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return { status: HttpStatus.OK, user };
  }

  async updatedService(id: string, data: UpdateUserDto): Promise<Object> {
    const currentUser = await this.userModel.findById(id);
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    if (data.password) {
      return new HttpException('Forbiden', HttpStatus.FORBIDDEN);
    }
    const newUser = { ...currentUser, data };
    const user = await this.userModel.findByIdAndUpdate(id, newUser);
    return { status: HttpStatus.OK, user };
  }

  async deletedService(id: string): Promise<Object> {
    const currentUser = await this.userModel.findById(id);
    if (!currentUser) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.userModel.findByIdAndDelete(id);
    return { status: HttpStatus.OK, id };
  }
}
