import express from "express";
import {
  createUser,
  deleteUserById,
  findAllUsers,
  findOneUser,
  updateUserById,
} from "../controller/users.controller.js";
export const userRoutes = express.Router();

userRoutes.get("/", findAllUsers);
userRoutes.get("/:id", findOneUser);
userRoutes.post("/", upload.single('image'), createUser,);
userRoutes.put("/:id", updateUserById);
userRoutes.delete("/:id", deleteUserById);
