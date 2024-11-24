import { Router } from "express";
import { registerController , loginController , verifyToken} from "../controller/index.js";
export const authRouter = Router();

authRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
gooleRouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/api/v1/profile' }))
authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/verifyToken", verifyToken);