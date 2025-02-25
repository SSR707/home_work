import express from "express";
import { loginController } from "../controller/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/login", loginController);
