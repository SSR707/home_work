import express from "express";
import {
  getAllExam,
  createExam,
  getPageExam,
  filterExam,
  searchExam,
  getByIdExam,
  updateExam,
  deleteExam,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const examRouter = express.Router();

examRouter.get("/page", roleGuard("admin"), getPageExam);
examRouter.get("/filter", roleGuard("admin"), filterExam);
examRouter.get("/search", roleGuard("admin"), searchExam);
examRouter.get("/", roleGuard("admin"), getAllExam);
examRouter.get("/:id", roleGuard("admin"), getByIdExam);
examRouter.post("/", roleGuard("admin"), createExam);
examRouter.put("/:id", roleGuard("admin"), updateExam);
examRouter.delete("/:id", roleGuard("admin"), deleteExam);
