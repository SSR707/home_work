import {Prop, Schema , SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument} from 'mongoose'

export type UsersDocument = HydratedDocument<Users>

@Schema()
export class Users {
  @Prop({required:true})
  fullname:string;

  @Prop({required:true , unique:true})
  email:string;

  @Prop({required:true})
  password:string;

  @Prop({required:true})
  version:number;
}

export const UsersSchema = SchemaFactory.createForClass(Users)
