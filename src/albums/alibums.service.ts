import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Albums } from '../model/albums.model';
import { UpdateAlbumstDto } from './dto/update-albums.dto';
import { IAlbums } from 'src/interface/interface';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel('albums') private AlbumsModel: Model<Albums>) {}

  async getAllService(): Promise<Object> {
    const data = await this.AlbumsModel.find();
    return { status: HttpStatus.OK, data };
  }

  async getByIdService(id: string): Promise<Object> {
    const Albums = await this.AlbumsModel.findById(id);
    if (!Albums) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return { status: HttpStatus.OK, Albums };
  }

  async createService(data: IAlbums): Promise<Object> {
    const Albums = new this.AlbumsModel(data);
    await Albums.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }
  async updatedService(id: string, data: UpdateAlbumstDto): Promise<Object> {
    const currentAlbums = await this.AlbumsModel.findById(id);
    if (!currentAlbums) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const newAlbums = { ...currentAlbums, data };
    const Albums = await this.AlbumsModel.findByIdAndUpdate(id, newAlbums);
    return { status: HttpStatus.OK, message: Albums };
  }

  async deletedService(id: string): Promise<Object> {
    const currentAlbums = await this.AlbumsModel.findById(id);
    if (!currentAlbums) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.AlbumsModel.findByIdAndDelete(id);
    return { status: HttpStatus.OK, id };
  }
}
