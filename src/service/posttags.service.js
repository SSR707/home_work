import db from "../database/db.js";
export const getAllPostTagsService = () => {
  try {
    return db("posttags").select("*");
  } catch (error) {
    throw error;
  }
};
export const getPagePostTagsService = (page, limit) => {
  try {
    return db("posttags").select("*").limit(limit).offset(page);
  } catch (error) {
    throw error;
  }
};
export const filterPostTagsService = (name, value) => {
  try {
    return db("posttags").select("*").where(name, "=", value);
  } catch (error) {
    throw error;
  }
};

export const searchPostTagsService = (search) => {
  try {
    return db("posttags").select("*").where("post_id", "ILIKE", `%${search}%`);
  } catch (error) {
    throw error;
  }
};
export const getByIdPostTagsService = (id) => {
  try {
    return db("posttags").select("*").where("id", "=", id);
  } catch (error) {
    throw error;
  }
};
export const createPostTagsService = (data) => {
  try {
    return db("posttags").insert(data).returning("*");
  } catch (error) {
    throw error;
  }
};

export const updatePostTagsService = (id, data) => {
  try {
    return db("posttags").where("id", "=", id).update(data);
  } catch (error) {
    throw error;
  }
};

export const deletePostTagsService = (id) => {
  try {
    return db("Pposttags").where("id", "=", id).del();
  } catch (error) {
    throw error;
  }
};
