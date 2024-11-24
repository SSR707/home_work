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
import { roleGuard } from "../middlewares/index.js";
export const coursesRouter = express.Router();

coursesRouter.get("/page", roleGuard("Admin"), getPageCourses);
coursesRouter.get("/filter", roleGuard("Admin"), filterCourses);
coursesRouter.get("/search", roleGuard("Admin"), searchCourses);
coursesRouter.get("/", roleGuard("Admin"), getAllCourses);
coursesRouter.get("/:id", roleGuard("Admin"), getByIdCourses);
coursesRouter.post("/", roleGuard("Admin"), createCourses);
coursesRouter.put("/:id", roleGuard("Admin"), updateCourses);
coursesRouter.delete("/:id", roleGuard("Admin"), deleteCourses);
