import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksSchema } from 'src/model/tracks.model';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'tracks', schema: TracksSchema }]),
      ],
      controllers: [TracksController],
      providers: [TracksService],
      exports:[TracksService]
})

export class TracksModule {}
