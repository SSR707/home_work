import db from "../database/db.js";
export const getAllHomeworkService = () => {
  try {
    return db("homework").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageHomeworkService = (page, limit) => {
  try {
    return db("homework").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterHomeworkService = (name, value) => {
  try {
    return db("homework").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchHomeworkService = (search) => {
  try {
    return db("homework").select("*").where("text", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdHomeworkService = (id) => {
  try {
    return db("homework").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createHomeworkService = (data) => {
  try {
    return db("homework").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updateHomeworkService = (id, data) => {
  try {
    return db("homework").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteHomeworkService = (id) => {
  try {
    return db("homework").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
