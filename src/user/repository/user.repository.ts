import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

export class UserRepository {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async uploadPicture(id: number, file: any) {
    const format = file.originalname.split('.')[1];
    if (!['png', 'jpg', 'img'].includes(format)) {
      throw new HttpException('FAQAT RAS QOYISH MIMKIN', HttpStatus.CONFLICT);
    }
    await this.update(id, { img: file.filename } as UpdateUserDto);
    return file;
  }

  async Profile(id:number) {
    const user = await this.userModel.findByPk(id);
    return { status: 200, data: user };
  }

  async findAll(page:number, limit:number) {
    const skip = (page - 1) * limit
    const user = await this.userModel.findAll({offset:skip , limit:limit});
    return { status: 200, data: user };
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return { status: 200, data: user };
  }

  async update(id: number, data: UpdateUserDto) {
    await this.findOne(id);
    if (data.password || data.role) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const user = await this.userModel.update(data, {
      where: { id },
      returning: true,
    });
    return { status: 200, data: user };
  }

  async delete(id: number) {
    await this.findOne(id);
    await this.userModel.destroy({ where: { id } });
    return { status: 200, message: 'Deleted' };
  }
}
