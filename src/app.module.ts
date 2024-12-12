import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ArtistModule } from './artist/artist.module';
import { UsersModule } from './users/users.module';
import { AlbumsModule } from './albums/albums.module';
import { TracksModule } from './tracks/tracks.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/nset_test'),
    AuthModule,
    UsersModule,
    ArtistModule,
    AlbumsModule,
    TracksModule,
    FavoritesModule,
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
