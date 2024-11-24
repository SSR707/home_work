import db from "../database/db.js";

export const getAllStudentService = () => {
  try {
    return db("student").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPageStudentService = (page, limit) => {
  try {
    return db("student").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterStudentService = (name, value) => {
  try {
    return db("student").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchStudentService = (search) => {
  try {
    return db("student").select("*").where("platform", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdStudentService = (id) => {
  try {
    return db("student").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createStudentService = (data) => {
    try {
        return db("student").insert({...data}).returning("*")
    } catch (error) {
        throw error
    }
}

export const updateStudentService = (id, data) => {
  try {
    return db("student").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deleteStudentService = (id) => {
  try {
    return db("student").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
