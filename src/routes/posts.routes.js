import { Hono } from "hono";
import {
  getAllPosts,
  createPosts,
  getPagePosts,
  filterPosts,
  searchPosts,
  getByIdPosts,
  updatePosts,
  deletePosts,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const postsRouter = new Hono()

postsRouter.get("/page", getPagePosts);
postsRouter.get("/filter", filterPosts);
postsRouter.get("/search", searchPosts);
postsRouter.get("/",  getAllPosts);
postsRouter.get("/:id",  getByIdPosts);
postsRouter.post("/",  createPosts);
postsRouter.put("/:id", roleGuard("admin"), updatePosts);
postsRouter.delete("/:id", roleGuard("admin"), deletePosts);
