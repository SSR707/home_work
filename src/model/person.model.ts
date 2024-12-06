import mongoose, { Schema, Document } from "mongoose";

type person = {fullname:string ,age:number, email:string , password:string}
const personSchema:Schema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String },
});

export const Person = mongoose.model<person>("Person", personSchema);
