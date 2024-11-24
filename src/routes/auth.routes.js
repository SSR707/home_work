import { Router } from "express";
import passport from "passport";
import "../stratgis/possport-google.js";
import {
  registerController,
  loginController,
  verifyToken,
  googlePassportRegisterController,
} from "../controller/index.js";
export const authRouter = Router();
//google orqali royhadan otish----
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googlePassportRegisterController
);

//---
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/verifyToken", verifyToken);
