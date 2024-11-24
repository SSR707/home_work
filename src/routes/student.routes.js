import express from "express";
import {
  getAllStudents,
  createStudents,
  getPageStudents,
  filterStudents,
  searchStudents,
  getByIdStudents,
  updateStudents,
  deleteStudents,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const studentsRouter = express.Router();

studentsRouter.get("/page", roleGuard('admin'), getPageStudents);
studentsRouter.get("/filter", roleGuard('admin'), filterStudents);
studentsRouter.get("/search", roleGuard('admin'), searchStudents);
studentsRouter.get("/", roleGuard('admin'), getAllStudents);
studentsRouter.get("/:id", roleGuard('admin'), getByIdStudents);
studentsRouter.post("/", roleGuard('admin'), createStudents);
studentsRouter.put("/:id", roleGuard('admin'), updateStudents);
studentsRouter.delete("/:id", roleGuard('admin'), deleteStudents);
