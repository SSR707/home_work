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
  import { UpdateAlbumstDto } from './dto/update-albums.dto';
  import { AlbumsService } from './alibums.service';
  import { IAlbums, IArtist } from 'src/interface/interface';
  
  @Controller('albums')
  export class AlbumsController {
    constructor(private readonly albumsServirce: AlbumsService) {}
  
    @Get()
    getAll() {
      try {
        const data = this.albumsServirce.getAllService();
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
        const data = this.albumsServirce.getByIdService(params.id);
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
    create(@Body() data: IAlbums) {
      try {
        const newalbums = this.albumsServirce.createService(data);
        return newalbums;
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
    update(@Body() data: UpdateAlbumstDto, @Param() params: any) {
      try {
        const newalbums = this.albumsServirce.updatedService(params.id, data);
        return newalbums;
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
        const deletealbums = this.albumsServirce.deletedService(params.id);
        return deletealbums;
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
  