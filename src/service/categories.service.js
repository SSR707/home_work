import db from "../database/db.js";
export const getAllCategoriesService = () => {
  try {
    return db("categories").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageCategoriesService = (page, limit) => {
  try {
    return db("categories").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterCategoriesService = (name, value) => {
  try {
    return db("categories").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchCategoriesService = (search) => {
  try {
    return db("categories").select("*").where("name", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdCategoriesService = (id) => {
  try {
    return db("categories").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createCategoriesService = (data) => {
  try {
    return db("categories").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateCategoriesService = (id, data) => {
  try {
    return db("categories").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteCategoriesService = (id) => {
  try {
    return db("categories").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
