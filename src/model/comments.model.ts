import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CommentsDocument = HydratedDocument<Comments>;

export class Comments {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true })
  user_id: string;

  @Prop()
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'posts', required: true })
  post_id: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comments);
