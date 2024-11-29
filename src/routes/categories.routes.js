import { Hono } from "hono";
import {
  getAllCategories,
  createCategories,
  getPageCategories,
  filterCategories,
  searchCategories,
  getByIdCategories,
  updateCategories,
  deleteCategories,
} from "../controller/index.js";
import { roleGuard } from "../middleware/index.js";
export const categoriesRouter = new Hono()

categoriesRouter.get("/page", getPageCategories);
categoriesRouter.get("/filter", filterCategories);
categoriesRouter.get("/search", searchCategories);
categoriesRouter.get("/",  getAllCategories);
categoriesRouter.get("/:id",  getByIdCategories);
categoriesRouter.post("/", roleGuard("admin"), createCategories);
categoriesRouter.put("/:id", roleGuard("admin"), updateCategories);
categoriesRouter.delete("/:id", roleGuard("admin"), deleteCategories);
