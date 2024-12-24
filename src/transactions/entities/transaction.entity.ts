import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TransactionsDocument = HydratedDocument<Transactions>;

@Schema()
export class Transactions {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users', index:true })
  user_id: string;

  @Prop({ required: true, min: -1000000, max: 1000000 })
  amount: number;

  @Prop({ required: true, maxlength: 255 })
  description: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
