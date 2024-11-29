import db from "../database/db.js";
export const getAllTagsService = () => {
  try {
    return db("tags").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageTagsService = (page, limit) => {
  try {
    return db("tags").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterTagsService = (name, value) => {
  try {
    return db("tags").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchTagsService = (search) => {
  try {
    return db("tags").select("*").where("name", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdTagsService = (id) => {
  try {
    return db("tags").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createTagsService = (data) => {
  try {
    return db("tags").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateTagsService = (id, data) => {
  try {
    return db("tags").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteTagsService = (id) => {
  try {
    return db("tags").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
