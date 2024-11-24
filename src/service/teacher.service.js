import db from "../database/db.js";

export const getAllTeacherService = () => {
  try {
    return db("teacher").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageTeacherService = (page, limit) => {
  try {
    return db("teacher").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterteacherService = (name, value) => {
  try {
    return db("teacher").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchTeacherService = (search) => {
  try {
    return db("teacher").select("*").where("name", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdTeacherService = (id) => {
  try {
    return db("teacher").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createTeacherService = (data) => {
  try {
    return db("teacher").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateTeacherService = (id, data) => {
  try {
    return db("teacher").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteTeacherService = (id) => {
  try {
    return db("teacher").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
