import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Postt extends Document {
    @Prop({ required: true })
    title: string;
  
    @Prop({ required: true })
    conntent: string;
  
    @Prop({ required: true })
    tag: string;
  
    @Prop({ required: true })
    author_name: string;
}

export const PostSchema = SchemaFactory.createForClass(Postt);
