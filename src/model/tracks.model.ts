import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TracksDocument = HydratedDocument<Tracks>;

@Schema()
export class Tracks {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  grammy: boolean;
}

export const TracksSchema = SchemaFactory.createForClass(Tracks);
