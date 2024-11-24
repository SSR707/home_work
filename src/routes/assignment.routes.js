import express from "express";
import {
  getAllAssignment,
  createAssignment,
  getPageAssignment,
  filterAssignment,
  searchAssignment,
  getByIdAssignment,
  updateAssignment,
  deleteAssignment,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const assignmentRouter = express.Router();

assignmentRouter.get("/page", roleGuard('admin'), getPageAssignment);
assignmentRouter.get("/filter", roleGuard('admin'), filterAssignment);
assignmentRouter.get("/search", roleGuard('admin'), searchAssignment);
assignmentRouter.get("/", roleGuard('admin'), getAllAssignment);
assignmentRouter.get("/:id", roleGuard('admin'), getByIdAssignment);
assignmentRouter.post("/", roleGuard('admin'), createAssignment);
assignmentRouter.put("/:id", roleGuard('admin'), updateAssignment);
assignmentRouter.delete("/:id", roleGuard('admin'), deleteAssignment);
