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

studentsRouter.get("/page", roleGuard("Admin"), getPageStudents);
studentsRouter.get("/filter", roleGuard("Admin"), filterStudents);
studentsRouter.get("/search", roleGuard("Admin"), searchStudents);
studentsRouter.get("/", roleGuard("Admin"), getAllStudents);
studentsRouter.get("/:id", roleGuard("Admin"), getByIdStudents);
studentsRouter.post("/", roleGuard("Admin"), createStudents);
studentsRouter.put("/:id", roleGuard("Admin"), updateStudents);
studentsRouter.delete("/:id", roleGuard("Admin"), deleteStudents);
