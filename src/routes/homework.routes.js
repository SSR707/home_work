import express from "express";
import {
  getAllHomework,
  createHomework,
  getPageHomework,
  filterHomework,
  searchHomework,
  getByIdHomework,
  updateHomework,
  deleteHomework,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const homeworkRouter = express.Router();

homeworkRouter.get("/page", roleGuard("admin"), getPageHomework);
homeworkRouter.get("/filter", roleGuard("admin"), filterHomework);
homeworkRouter.get("/search", roleGuard("admin"), searchHomework);
homeworkRouter.get("/", roleGuard("admin"), getAllHomework);
homeworkRouter.get("/:id", roleGuard("admin"), getByIdHomework);
homeworkRouter.post("/", roleGuard("admin"), createHomework);
homeworkRouter.put("/:id", roleGuard("admin"), updateHomework);
homeworkRouter.delete("/:id", roleGuard("admin"), deleteHomework);h