import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesSchema } from 'src/model/favorites.model';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { AlbumsService } from 'src/albums/alibums.service';
import { ArtistService } from 'src/artist/artist.service';
import { TracksService } from 'src/tracks/tracks.service';
import { AlbumsSchema } from 'src/model/albums.model';
import { ArtistSchema } from 'src/model/artists.model';
import { TracksSchema } from 'src/model/tracks.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'favorites', schema: FavoritesSchema }]),
    MongooseModule.forFeature([{ name: 'albums', schema: AlbumsSchema }]),
    MongooseModule.forFeature([{ name: 'artists', schema: ArtistSchema}]),
    MongooseModule.forFeature([{ name: 'tracks', schema: TracksSchema }])
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService, AlbumsService, ArtistService, TracksService],
})
export class FavoritesModule {}
