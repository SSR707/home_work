import db from "../database/db.js";

export const getAllAssignmentService = () => {
  try {
    return db("assignment").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageAssignmentService = (page, limit) => {
  try {
    return db("assignment").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterAssignmentService = (name, value) => {
  try {
    return db("assignment").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchAssignmentService = (search) => {
  try {
    return db("assignment")
      .select("*")
      .where("course_id", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdAssignmentService = (id) => {
  try {
    return db("assignment").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createAssignmentService = (data) => {
  try {
    return db("assignment").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateAssignmentService = (id, data) => {
  try {
    return db("assignment").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteAssignmentService = (id) => {
  try {
    return db("assignment").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
