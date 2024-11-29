import db from "../database/db.js";
export const getAllPostsService = () => {
  try {
    return db("posts").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPagePostsService = (page, limit) => {
  try {
    return db("posts").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterPostsService = (name, value) => {
  try {
    return db("posts").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchPostsService = (search) => {
  try {
    return db("posts").select("*").where("title", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdPostsService = (id) => {
  try {
    return db("posts").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createPostsService = (data) => {
  try {
    return db("posts").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updatePostsService = (id, data) => {
  try {
    return db("posts").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deletePostsService = (id) => {
  try {
    return db("posts").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
