import db from "../database/db.js";
export const getAllLessonService = () => {
  try {
    return db("lesson").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageLessonService = (page, limit) => {
  try {
    return db("lesson").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterLessonService = (name, value) => {
  try {
    return db("lesson").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchLessonService = (search) => {
  try {
    return db("lesson").select("*").where("lesson_name", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdLessonService = (id) => {
  try {
    return db("lesson").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createLessonService = (data) => {
  try {
    return db("lesson").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateLessonService = (id, data) => {
  try {
    return db("lesson").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteLessonService = (id) => {
  try {
    return db("lesson").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
