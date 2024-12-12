import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FavoritesDocument = HydratedDocument<Favorites>;

@Schema()
export class Favorites {
  @Prop({ type: [{ name: String, genre: String }], default: [] })
  artists: { name: string; genre: string }[];

  @Prop({ type: [{ title: String, releaseDate: Date }], default: [] })
  albums: { title: string; releaseDate: Date }[];

  @Prop({ type: [{ title: String, duration: Number }], default: [] })
  tracks: { title: string; duration: number }[];
}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);