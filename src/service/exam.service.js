import db from "../database/db.js";
export const getAllExamService = () => {
  try {
    return db("exam").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageExamService = (page, limit) => {
  try {
    return db("exam").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterExamService = (name, value) => {
  try {
    return db("exam").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchExamService = (search) => {
  try {
    return db("exam").select("*").where("name", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdExamService = (id) => {
  try {
    return db("exam").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createExamService = (data) => {
  try {
    return db("exam").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateExamService = (id, data) => {
  try {
    return db("exam").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteExamService = (id) => {
  try {
    return db("exam").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
