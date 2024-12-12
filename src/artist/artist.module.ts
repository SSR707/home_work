import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistsController } from './artist.controller';
import { ArtistService } from './artist.service';
import { ArtistSchema } from 'src/model/artists.model';

@Module({  imports: [
    MongooseModule.forFeature([{ name: 'artists', schema: ArtistSchema }]),
  ],
  controllers: [ArtistsController],
  providers: [ArtistService],
  exports:[ArtistService]
})
export class ArtistModule {}
