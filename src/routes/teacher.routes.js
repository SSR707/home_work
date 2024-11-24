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
import { roleGuard } from "../middlewares/index.js";
export const teacherRouter = express.Router();

teacherRouter.get("/page", roleGuard("Admin"), getPageTeacher);
teacherRouter.get("/filter", roleGuard("Admin"), filterTeacher);
teacherRouter.get("/search", roleGuard("Admin"), searchTeacher);
teacherRouter.get("/", roleGuard("Admin"), getAllTeacher);
teacherRouter.get("/:id", roleGuard("Admin"), getByIdTeacher);
teacherRouter.post("/", roleGuard("Admin"), createTeacher);
teacherRouter.put("/:id", roleGuard("Admin"), updateTeacher);
teacherRouter.delete("/:id", roleGuard("Admin"), deleteTeacher);
