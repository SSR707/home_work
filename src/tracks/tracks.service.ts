import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from '../model/artists.model';
import {  UpdateTracksDto } from './dto/update-tracks.dto';
import { ITracks } from 'src/interface/interface';
import { Tracks } from 'src/model/tracks.model';

@Injectable()
export class TracksService {
  constructor(@InjectModel('tracks') private tracksModel: Model<Tracks>) {}

  async getAllService(): Promise<Object> {
    const data = await this.tracksModel.find();
    return { status: HttpStatus.OK, data };
  }

  async getByIdService(id: string): Promise<Object> {
    const tracks = await this.tracksModel.findById(id);
    if (!tracks) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return { status: HttpStatus.OK, tracks };
  }

  async createService(data: ITracks): Promise<Object> {
    const tracks = new this.tracksModel(data);
    await tracks.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }
  async updatedService(id: string, data: UpdateTracksDto): Promise<Object> {
    const currenttracks = await this.tracksModel.findById(id);
    if (!currenttracks) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const newtracks = { ...currenttracks, data };
    const tracks = await this.tracksModel.findByIdAndUpdate(id, newtracks);
    return { status: HttpStatus.OK, message: tracks };
  }

  async deletedService(id: string): Promise<Object> {
    const currenttracks = await this.tracksModel.findById(id);
    if (!currenttracks) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.tracksModel.findByIdAndDelete(id);
    return { status: HttpStatus.OK, id };
  }
}
