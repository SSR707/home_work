import { Router } from 'express'
import {
    loginController,
    registerController,
    verifyTokenController,
} from '../controller/auth.controller.js'

export const authRouter = Router()

authRouter.post('/register', registerController)
authRouter.post('/login', loginController)
authRouter.post('/verifyToken', verifyTokenController)
