import { Hono } from "hono";
import {
  getProfile,
  getAllUsers,
  getByIdUser,
  getPageUser,
  filterUser,
  searchrUser,
  updateUser,
  deleteUser,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";

export const userRouter = new Hono();

userRouter.get("/profile", getProfile);
userRouter.get("/page", roleGuard("admin"), getPageUser);
userRouter.get("/filter", roleGuard("admin"), filterUser);
userRouter.get("/search", roleGuard("admin"), searchrUser);
userRouter.get("/", roleGuard("admin"), getAllUsers);
userRouter.get("/:id", roleGuard("admin"), getByIdUser);
userRouter.put("/:id", roleGuard("admin"), updateUser);
userRouter.delete("/:id", roleGuard("admin"), deleteUser);
