import {
  Body,
  Post,
  Controller,
  Get,
  Put,
  Delete,
  Param,
  HttpException,
  Req,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesServirce: FavoritesService) {}

  @Get()
  getAll() {
    try {
      const data = this.favoritesServirce.getAllService();
      return data;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }


  @Post('track/:id')
  createTrack(@Param() param: any, @Req() req: Request) {
    try {
      const newTrack = this.favoritesServirce.createServiceTrack(param.id, req['user'].id);
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
  deleteTrack(@Param() params: any, @Req() req: Request) {
    try {
      const deleteTrack = this.favoritesServirce.deletedServiceTrack(params.id, req['user'].id);
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

  @Post('albums/:id')
  createAlbum(@Param() param: any, @Req() req: Request) {
    try {
      const newAlbum = this.favoritesServirce.createServiceAlbum(param.id, req['user'].id);
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

  @Delete('albums/:id')
  deleteAlbum(@Param() params: any, @Req() req: Request) {
    try {
      const deleteAlbum = this.favoritesServirce.deletedServiceAlbum(params.id, req['user'].id);
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

  @Post('artists/:id')
  createArtist(@Param() param: any, @Req() req: Request) {
    try {
      const newArtist = this.favoritesServirce.createServiceArtist(param.id, req['user'].id);
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

  @Delete('artists/:id')
  deleteArtist(@Param() params: any , @Req() req: Request) {
    try {
      const deleteArtist = this.favoritesServirce.deletedServiceArtist(
        params.id,
        req['user'].id
      );
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
