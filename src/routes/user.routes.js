import express from "express"
import {
    getProfile,
    getAllUsers,
    getByIdUser,
    getPageUser,
    filterUser,
    searchrUser,
    updateUser,
    deleteUser,
} from "../controller/index.js"
import { roleGuard } from "../middlewares/index.js"

export const userRouter = express.Router()

userRouter.get("/profile" , getProfile)
userRouter.get("/page" , getPageUser)
userRouter.get("/filter", filterUser)
userRouter.get("/search", searchrUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getByIdUser)
userRouter.put("/:id", roleGuard('Admin') ,updateUser)
userRouter.delete("/:id",roleGuard('Admin'),deleteUser)
