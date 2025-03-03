import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: Number,

    min: 0,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    required: true,
  },
  password: {
    type: String,

  },
});

export const Users = mongoose.model("Users", userSchema);
