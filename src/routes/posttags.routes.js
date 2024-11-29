import { Hono } from "hono";
import {
  getAllPostTags,
  createPostTags,
  getPagePostTags,
  filterPostTags,
  searchPostTags,
  getByIdPostTags,
  updatePostTags,
  deletePostTags,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const posttagsRouter = new Hono()

posttagsRouter.get("/page", getPagePostTags);
posttagsRouter.get("/filter", filterPostTags);
posttagsRouter.get("/search", searchPostTags);
posttagsRouter.get("/",  getAllPostTags);
posttagsRouter.get("/:id",  getByIdPostTags);
posttagsRouter.post("/",  createPostTags);
posttagsRouter.put("/:id", roleGuard("admin"), updatePostTags);
posttagsRouter.delete("/:id", roleGuard("admin"), deletePostTags);t