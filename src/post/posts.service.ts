import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Postt } from './post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Postt.name) private postModel: Model<Postt>) {}

  async create(postDto: any): Promise<Postt> {
    const newPost = new this.postModel(postDto);
    return newPost.save();
  }

  async findAll(): Promise<Postt[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Postt> {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, postDto: any): Promise<Postt> {
    return this.postModel.findByIdAndUpdate(id, postDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Postt> {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
