import { HttpException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from 'src/model/posts.model';
import { Model } from 'mongoose';
import { ErrorException } from 'src/auth/entities/error.excaption';

@Injectable()
export class PostsService {
  constructor(@InjectModel('posts') private postsModel: Model<Posts>) {}
  async create(createPostDto: CreatePostDto, id: string) {
    const new_post = new this.postsModel({ user_id: id, ...createPostDto });
    await new_post.save();
    return {
      status: ErrorException.CREATED().statusCode,
      message: ErrorException.CREATED().message,
    };
  }

  async findAll() {
    const posts_data = await this.postsModel.find();
    if (!posts_data) {
      throw new HttpException(
        ErrorException.NO_CONTENT().message,
        ErrorException.NO_CONTENT().statusCode,
      );
    }
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      posts_data,
    };
  }

  async findOne(id: string) {
    const posts = await this.postsModel.findOne({ _id: id });
    if (!posts) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      posts,
    };
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const currentUser = await this.postsModel.findOne({ _id: id });
    if (!currentUser) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    const new_post_data = { ...currentUser, ...updatePostDto };
    await this.postsModel.findByIdAndUpdate(id, new_post_data);
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      id,
    };
  }
  
  async remove(id: string) {
    const currentUser = await this.postsModel.findOne({ _id: id });
    if (!currentUser) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    await this.postsModel.findByIdAndUpdate(id);
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      id,
    };
  }
}
