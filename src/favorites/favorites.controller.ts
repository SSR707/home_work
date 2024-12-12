import {
  Body,
  Post,
  Controller,
  Get,
  Put,
  Delete,
  Param,
  HttpException,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesServirce: FavoritesService) {}

  @Post('track/:id')
  createTrack(@Param() param: any) {
    try {
      const newTrack = this.favoritesServirce.createServiceTrack(param);
      return newTrack;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Delete('track/:id')
  deleteTrack(@Param() params: any) {
    try {
      const deleteTrack = this.favoritesServirce.deletedServiceTrack(params.id);
      return deleteTrack;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Post('album/:id')
  createAlbum(@Param() param: any) {
    try {
      const newAlbum = this.favoritesServirce.createServiceAlbum(param);
      return newAlbum;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Delete('album/:id')
  deleteAlbum(@Param() params: any) {
    try {
      const deleteAlbum = this.favoritesServirce.deletedServiceAlbum(params.id);
      return deleteAlbum;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Post('artist/:id')
  createArtist(@Param() param: any) {
    try {
      const newArtist = this.favoritesServirce.createServiceArtist(param);
      return newArtist;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Delete('artist/:id')
  deleteArtist(@Param() params: any) {
    try {
      const deleteArtist = this.favoritesServirce.deletedServiceArtist(params.id);
      return deleteArtist;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }
}
