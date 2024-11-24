import { Router } from "express";
import passport from "passport";
import "../stratgis/possport-google.js";
import {
  registerController,
  loginController,
  verifyToken,
} from "../controller/index.js";
export const authRouter = Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/api/v1/profile" })
);
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/verifyToken", verifyToken);
