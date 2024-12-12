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
import { UpdateTracksDto } from './dto/update-tracks.dto';
import { TracksService } from './tracks.service';
import { ITracks } from 'src/interface/interface';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksServirce: TracksService) {}

  @Get()
  getAll() {
    try {
      const data = this.tracksServirce.getAllService();
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
      const data = this.tracksServirce.getByIdService(params.id);
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
  create(@Body() data: ITracks) {
    try {
      const newtracks = this.tracksServirce.createService(data);
      return newtracks;
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
  update(@Body() data: UpdateTracksDto, @Param() params: any) {
    try {
      const newtracks = this.tracksServirce.updatedService(params.id, data);
      return newtracks;
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
      const deletetracks = this.tracksServirce.deletedService(params.id);
      return deletetracks;
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
