import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Albums } from '../model/albums.model';
import { Tracks } from 'src/model/tracks.model';
import { Artist } from 'src/model/artists.model';
import { Favorites } from 'src/model/favorites.model';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel('favorites') private FavoritesModel: Model<Favorites>,
    @InjectModel('albums') private AlbumsModel: Model<Albums>,
    @InjectModel('artists') private artistModel: Model<Artist>,
    @InjectModel('tracks') private tracksModel: Model<Tracks>,
  ) {}

  async getAllService(): Promise<Object> {
    const data = await this.FavoritesModel.find();
    return { status: HttpStatus.OK, data };
  }

  async createServiceTrack(id: string, user_id: string): Promise<Object> {
    const currentTrack = await this.tracksModel.findOne({ _id: id });
    if (!currentTrack) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    let data: any;
    data = await this.FavoritesModel.findOne({ _id: user_id });
    if (!data) {
      data = await this.createFavorites(user_id);
    }
    data.tracks.push(currentTrack);
    await data.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async deletedServiceTrack(id: string, user_id: string): Promise<Object> {
    const currentTracks = await this.FavoritesModel.findById({
      tracks: { _id: id },
    });
    if (!currentTracks) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.FavoritesModel.findByIdAndDelete({ 'tracks._id': id });
    return { status: HttpStatus.OK, id };
  }

  async createServiceAlbum(id: string, user_id: string): Promise<Object> {
    const Albums = await this.AlbumsModel.findOne({ _id: id });
    if (!Albums) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    let data: any;
    data = await this.FavoritesModel.findOne({ _id: user_id });
    if (!data) {
      data = await this.createFavorites(user_id);
    }

    data.albums.push(Albums);
    await data.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async deletedServiceAlbum(id: string, user_id: string): Promise<Object> {
    const currentAlbums = await this.FavoritesModel.findById({
      albums: { _id: id },
    });
    if (!currentAlbums) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.FavoritesModel.findByIdAndDelete({ 'albums._id': id });
    return { status: HttpStatus.OK, id };
  }

  async createServiceArtist(id: string, user_id: string): Promise<Object> {
    const Artist = await this.artistModel.findOne({ _id: id });
    if (!Artist) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    let data: any;
    data = await this.FavoritesModel.findOne({ _id: user_id });
    if (!data) {
      data = await this.createFavorites(user_id);
    }
    data.artists.push(Albums);
    data.save();
    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async deletedServiceArtist(id: string, user_id: string): Promise<Object> {
    const currentArtis = await this.FavoritesModel.findById({
      artists: { _id: id },
    });
    if (!currentArtis) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.FavoritesModel.findByIdAndDelete({ 'artists._id': id });
    return { status: HttpStatus.OK, id };
  }

  async createFavorites(id: string) {
    const fav = new this.FavoritesModel({ user_id: id });
    return fav;
  }
}
