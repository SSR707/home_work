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

assignmentRouter.get("/page", roleGuard("Admin"), getPageAssignment);
assignmentRouter.get("/filter", roleGuard("Admin"), filterAssignment);
assignmentRouter.get("/search", roleGuard("Admin"), searchAssignment);
assignmentRouter.get("/", roleGuard("Admin"), getAllAssignment);
assignmentRouter.get("/:id", roleGuard("Admin"), getByIdAssignment);
assignmentRouter.post("/", roleGuard("Admin"), createAssignment);
assignmentRouter.put("/:id", roleGuard("Admin"), updateAssignment);
assignmentRouter.delete("/:id", roleGuard("Admin"), deleteAssignment);
