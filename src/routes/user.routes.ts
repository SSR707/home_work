import { Router } from "express";
import {
  getAllData,
  getOneData,
  createData,
  updateData,
  deleteData,
} from "../controllers/user.controller";

const router = Router();

router.get("/", getAllData);
router.get("/:id", getOneData);
router.post("/", createData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
