import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Albums } from '../model/albums.model';
import { AlbumsService } from 'src/albums/alibums.service';
import { ArtistService } from 'src/artist/artist.service';
import { TracksService } from 'src/tracks/tracks.service';

@Injectable()
export class FavoritesService {
  constructor(@InjectModel('favorites') private FavoritesModel: Model<Albums> ,
  private readonly  albumsService :  AlbumsService,
  private readonly  tracksService :  TracksService,
  private readonly artistService :  ArtistService  ) {}


  async createServiceTrack(id:string): Promise<Object> {

    const currentTrack = await this.tracksService.getByIdService(id);
    if (!currentTrack) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async deletedServiceTrack(id: string): Promise<Object> {
    const currentTrack = await this.FavoritesModel.findById(id);
    if (!currentTrack) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.FavoritesModel.findByIdAndDelete(id);
    return { status: HttpStatus.OK, id };
  }

  async createServiceAlbum(id: string): Promise<Object> {
    const Albums = new this.FavoritesModel();
    await Albums.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async deletedServiceAlbum(id: string): Promise<Object> {
    const currentAlbums = await this.FavoritesModel.findById(id);
    if (!currentAlbums) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.FavoritesModel.findByIdAndDelete(id);
    return { status: HttpStatus.OK, id };
  }

  async createServiceArtist(id: string): Promise<Object> {
    const Artist = new this.FavoritesModel();
    await Artist.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async deletedServiceArtist(id: string): Promise<Object> {
    const currentArtist = await this.FavoritesModel.findById(id);
    if (!currentArtist) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.FavoritesModel.findByIdAndDelete(id);
    return { status: HttpStatus.OK, id };
  }

}
