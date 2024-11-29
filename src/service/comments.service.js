import db from "../database/db.js";
export const getAllCommentsService = () => {
  try {
    return db("comments").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageCommentsService = (page, limit) => {
  try {
    return db("comments").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterCommentsService = (name, value) => {
  try {
    return db("comments").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchCommentsService = (search) => {
  try {
    return db("comments").select("*").where("body", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdCommentsService = (id) => {
  try {
    return db("comments").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createCommentsService = (data) => {
  try {
    return db("comments").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateCommentsService = (id, data) => {
  try {
    return db("comments").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteCommentsService = (id) => {
  try {
    return db("comments").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
