import { HttpException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from 'src/model/comments.model';
import { ErrorException } from 'src/auth/entities/error.excaption';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('comments') private commentModel: Model<Comments>) {}
  async create(createCommentDto: CreateCommentDto) {
    const new_comment = new this.commentModel(createCommentDto);
    await new_comment.save();
    return {
      status: ErrorException.CREATED().statusCode,
      message: ErrorException.CREATED().message,
    };
  }

  async findAll() {
    const comment_data = await this.commentModel.find();
    if (!comment_data) {
      throw new HttpException(
        ErrorException.NO_CONTENT().message,
        ErrorException.NO_CONTENT().statusCode,
      );
    }
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      comment_data,
    };
  }

  async findOne(id: string) {
    const comment = await this.commentModel.findOne({ _id: id });
    if (!comment) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      comment,
    };
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const currentComment = await this.commentModel.findOne({ _id: id });
    if (!currentComment) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    const new_comment_data = { ...currentComment, ...updateCommentDto };
    await this.commentModel.findByIdAndUpdate(id, new_comment_data);
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      id,
    };
  }

  async remove(id: string) {
    const currentComment = await this.commentModel.findOne({ _id: id });
    if (!currentComment) {
      throw new HttpException(
        ErrorException.NOT_FOUND().message,
        ErrorException.NOT_FOUND().statusCode,
      );
    }
    await this.commentModel.findByIdAndDelete(id);
    return {
      status: ErrorException.OK().statusCode,
      message: ErrorException.OK().message,
      id,
    };
  }
}
