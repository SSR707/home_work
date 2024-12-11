import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Postt } from './post.schema';

@Controller('posts')
export class PostsController {
  constructor(@InjectModel(Postt.name) private postModel: Model<Postt>) {}

  @Post()
  async create(@Body() postDto: any) {
    const createdBlog = new this.postModel( postDto);
    return await createdBlog.save();
  }

  @Get()
  async findAll() {
    return this.postModel.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const currnetBlog = this.postModel.findOne({ _id: +id }).exec();
    if (!currnetBlog) {
      return { message: 'User topilmadi' };
    }
    return currnetBlog;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() postDto: any) {
    const currnetBlog = this.postModel.findOne({ _id: +id }).exec();
    if (!currnetBlog) {
      return { message: "User topilmadi" };
    }
    const newData = { ...currnetBlog, ... postDto };
    await this.postModel.findByIdAndUpdate(+id, newData);
    return { message: "Updated" };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const currnetBlog = this.postModel.findOne({ _id: +id }).exec();
    if (!currnetBlog) {
      return { message: "User topilmadi" };
    }
    await this.postModel.findByIdAndDelete(+id);
    return { message: "Deleted" };
  }
}
