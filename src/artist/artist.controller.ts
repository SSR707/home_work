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
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistService } from './artist.service';
import { IArtist } from 'src/interface/interface';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistServirce: ArtistService) {}

  @Get()
  getAll() {
    try {
      const data = this.artistServirce.getAllService();
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

  @Get(':id')
  getById(@Param() params: any) {
    try {
      const data = this.artistServirce.getByIdService(params.id);
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

  @Post()
  create(@Body() data: IArtist) {
    try {
      const newartist = this.artistServirce.createService(data);
      return newartist;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Put(':id')
  update(@Body() data: UpdateArtistDto, @Param() params: any) {
    try {
      const newartist = this.artistServirce.updatedService(params.id, data);
      return newartist;
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          status: error.getStatus(),
          message: error.getResponse(),
        };
      }
    }
  }

  @Delete()
  delete(@Param() params: any) {
    try {
      const deleteartist = this.artistServirce.deletedService(params.id);
      return deleteartist;
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
