import {
  getAllCategoriesService,
  getPageCategoriesService,
  filterCategoriesService,
  searchCategoriesService,
  getByIdCategoriesService,
  updateCategoriesService,
  deleteCategoriesService,
  createCategoriesService,
} from "../service/index.js";
import { logger } from "../utils/index.js";
import { CategoriesValidation } from "../validation/index.js";

export const getAllCategories = async (c) => {
  try {
    const Categories = await getAllCategoriesService();
    return c.status(200).json({ status: "Success", data: Categories });
  } catch (error) {
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const getByIdCategories = async (c) => {
  try {
    const Categories = await getByIdCategoriesService(c.req.params.id);
    if (!Categories) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    return c.status(200).json({ status: "Success", data: Categories });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const searchCategories = async (c) => {
  try {
    const search = c.req.query.name || "";
    const Categories = await searchCategoriesService(search);
    if (!Categories) {
      return c.status(404).json({ msg: "Malumot Topilmadi" });
    }
    return c.status(200).json({ status: "Success", data: Categories });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const filterCategories = async (c) => {
  try {
    const key = String(Object.keys(c.req.query)[0]);
    const Categories = await filterCategoriesService(key, c.req.query[key]);
    if (!Categories) {
      return c.status(404).json({ msg: "Malumot Topilmadi" });
    }
    return c.status(200).json({ status: "Success", data: Categories });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const getPageCategories = async (c) => {
  try {
    const { page, limit } = c.req.query;
    const skip = (page - 1) * limit;
    const Categories = await getPageCategoriesService(skip, limit);
    return c.status(200).json({ status: "Success", data: Categories });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const createCategories = async (c) => {
  try {
    const { error, value } = CategoriesValidation(c.req.json());
    if (error) {
      return c.status(400).json({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
    }
    const adress = await createCategoriesService({ ...c.req.json() });
    
    return c.status(201).json({
      status: "Created",
      data: adress,
    });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const updateCategories = async (c) => {
  try {
    const Categories = await getByIdCategoriesService(c.req.params.id);
    if (!Categories) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    const newCategoriesData = { ...Categories._doc, ...c.req.json() };
    const newCategories = await updateCategoriesService(
      c.req.params.id,
      newCategoriesData
    );
    return c.status(200).json({ status: "Success", id: newCategories.id });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const deleteCategories = async (c) => {
  try {
    const Categories = await getByIdCategoriesService(c.req.params.id);
    if (!Categories) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    const deleteCategories = await deleteCategoriesService(c.req.params.id);
    return c.status(200).json({ status: "Success", id: deleteCategories.id });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
