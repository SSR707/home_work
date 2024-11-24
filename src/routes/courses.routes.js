import express from "express";
import {
  getAllCourses,
  createCourses,
  getPageCourses,
  filterCourses,
  searchCourses,
  getByIdCourses,
  updateCourses,
  deleteCourses,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const coursesRouter = express.Router();

coursesRouter.get("/page", roleGuard('admin'), getPageCourses);
coursesRouter.get("/filter", roleGuard('admin'), filterCourses);
coursesRouter.get("/search", roleGuard('admin'), searchCourses);
coursesRouter.get("/", roleGuard('admin'), getAllCourses);
coursesRouter.get("/:id", roleGuard('admin'), getByIdCourses);
coursesRouter.post("/", roleGuard('admin'), createCourses);
coursesRouter.put("/:id", roleGuard('admin'), updateCourses);
coursesRouter.delete("/:id", roleGuard('admin'), deleteCourses);
