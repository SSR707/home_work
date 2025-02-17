import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  title: {
    type: String,
  },
});

export const Users = mongoose.model("Users", userSchema);
