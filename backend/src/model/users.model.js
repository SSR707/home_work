import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
  },
  description: {
    type: String,
  },
  imags: {
    type: String,
  },
  twitter: {
    type: String,
  },
  linkedin: {
    type: String,
  },
});

export const Users = mongoose.model("Users", userSchema);
