import { Hono } from "hono";
import {
  getAllTags,
  createTags,
  getPageTags,
  filterTags,
  searchTags,
  getByIdTags,
  updateTags,
  deleteTags,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const tagsRouter = new Hono()

tagsRouter.get("/page", getPageTags);
tagsRouter.get("/filter", filterTags);
tagsRouter.get("/search", searchTags);
tagsRouter.get("/",  getAllTags);
tagsRouter.get("/:id",  getByIdTags);
tagsRouter.post("/",  createTags);
tagsRouter.put("/:id", roleGuard("admin"), updateTags);
tagsRouter.delete("/:id", roleGuard("admin"), deleteTags);