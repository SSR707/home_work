import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsSchema } from 'src/model/albums.model';
import { AlbumsService } from './alibums.service';
import { AlbumsController } from './albums.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'albums', schema: AlbumsSchema }]),
      ],
      controllers: [AlbumsController],
      providers: [AlbumsService],
})
export class AlbumsModule {}
