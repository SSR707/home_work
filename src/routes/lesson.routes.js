import express from "express";
import {
  getAllLesson,
  createLesson,
  getPageLesson,
  filterLesson,
  searchLesson,
  getByIdLesson,
  updateLesson,
  deleteLesson,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const lessonRouter = express.Router();

lessonRouter.get("/page", roleGuard("admin"), getPageLesson);
lessonRouter.get("/filter", roleGuard("admin"), filterLesson);
lessonRouter.get("/search", roleGuard("admin"), searchLesson);
lessonRouter.get("/", roleGuard("admin"), getAllLesson);
lessonRouter.get("/:id", roleGuard("admin"), getByIdLesson);
lessonRouter.post("/", roleGuard("admin"), createLesson);
lessonRouter.put("/:id", roleGuard("admin"), updateLesson);
lessonRouter.delete("/:id", roleGuard("admin"), deleteLesson);h