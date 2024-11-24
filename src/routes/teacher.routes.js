import express from "express";
import {
  getAllTeacher,
  createTeacher,
  getPageTeacher,
  filterTeacher,
  searchTeacher,
  getByIdTeacher,
  updateTeacher,
  deleteTeacher,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const teacherRouter = express.Router();

teacherRouter.get("/page", roleGuard('admin'), getPageTeacher);
teacherRouter.get("/filter", roleGuard('admin'), filterTeacher);
teacherRouter.get("/search", roleGuard('admin'), searchTeacher);
teacherRouter.get("/", roleGuard('admin'), getAllTeacher);
teacherRouter.get("/:id", roleGuard('admin'), getByIdTeacher);
teacherRouter.post("/", roleGuard('admin'), createTeacher);
teacherRouter.put("/:id", roleGuard('admin'), updateTeacher);
teacherRouter.delete("/:id", roleGuard('admin'), deleteTeacher);
