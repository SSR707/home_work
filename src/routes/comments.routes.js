import { Hono } from "hono";
import {
  getAllComments,
  createComments,
  getPageComments,
  filterComments,
  searchComments,
  getByIdComments,
  updateComments,
  deleteComments,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const commentsRouter = new Hono()

commentsRouter.get("/page", getPageComments);
commentsRouter.get("/filter", filterComments);
commentsRouter.get("/search", searchComments);
commentsRouter.get("/",  getAllComments);
commentsRouter.get("/:id",  getByIdComments);
commentsRouter.post("/",  createComments);
commentsRouter.put("/:id", roleGuard("admin"), updateComments);
commentsRouter.delete("/:id", roleGuard("admin"), deleteComments);
