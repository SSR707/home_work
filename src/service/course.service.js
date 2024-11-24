import db from "../database/db.js";
export const getAllCoursesService = () => {
  try {
    return db("courses").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageCoursesService = (page, limit) => {
  try {
    return db("courses").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterCoursesService = (name, value) => {
  try {
    return db("courses").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchCoursesService = (search) => {
  try {
    return db("courses")
      .select("*")
      .where("name", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdCoursesService = (id) => {
  try {
    return db("courses").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createCoursesService = (data) => {
  try {
    return db("courses")
      .insert(data)
      .returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateCoursesService = (id, data) => {
  try {
    return db("courses").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteCoursesService = (id) => {
  try {
    return db("courses").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
