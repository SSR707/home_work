import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesSchema } from 'src/model/favorites.model';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { AlbumsService } from 'src/albums/alibums.service';
import { ArtistService } from 'src/artist/artist.service';
import { TracksService } from 'src/tracks/tracks.service';

@Module({imports: [
    MongooseModule.forFeature([{ name: 'favorites', schema: FavoritesSchema }]),
    AlbumsService,
    ArtistService,
    TracksService
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],

})

export class FavoritesModule {}
