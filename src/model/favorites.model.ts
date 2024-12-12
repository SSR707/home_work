import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FavoritesDocument = HydratedDocument<Favorites>;

@Schema()
export class Favorites {
  @Prop()
  artists: [];

  @Prop()
  albums: [];

  @Prop()
  tracks: [];
}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);
