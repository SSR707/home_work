import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlbumsDocument = HydratedDocument<Albums>;

@Schema()
export class Albums {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  grammy: boolean;
}

export const AlbumsSchema = SchemaFactory.createForClass(Albums);
