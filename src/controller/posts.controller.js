import {
  getAllPostsService,
  getPagePostsService,
  filterPostsService,
  searchPostsService,
  getByIdPostsService,
  updatePostsService,
  deletePostsService,
  createPostsService,
} from "../service/index.js";
import { logger } from "../utils/index.js";
import { PostsValidation } from "../validation/index.js";

export const getAllPosts = async (c) => {
  try {
    const Posts = await getAllPostsService();
    return c.status(200).json({ status: "Success", data: Posts });
  } catch (error) {
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const getByIdPosts = async (c) => {
  try {
    const Posts = await getByIdPostsService(c.req.params.id);
    if (!Posts) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    return c.status(200).json({ status: "Success", data: Posts });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const searchPosts = async (c) => {
  try {
    const search = c.req.query.name || "";
    const Posts = await searchPostsService(search);
    if (!Posts) {
      return c.status(404).json({ msg: "Malumot Topilmadi" });
    }
    return c.status(200).json({ status: "Success", data: Posts });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const filterPosts = async (c) => {
  try {
    const key = String(Object.keys(c.req.query)[0]);
    const Posts = await filterPostsService(key, c.req.query[key]);
    if (!Posts) {
      return c.status(404).json({ msg: "Malumot Topilmadi" });
    }
    return c.status(200).json({ status: "Success", data: Posts });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const getPagePosts = async (c) => {
  try {
    const { page, limit } = c.req.query;
    const skip = (page - 1) * limit;
    const Posts = await getPagePostsService(skip, limit);
    return c.status(200).json({ status: "Success", data: Posts });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const createPosts = async (c) => {
  try {
    const { error, value } = PostsValidation(c.req.json());
    if (error) {
      return c.status(400).json({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
    }
    const adress = await createPostsService({ ...c.req.json() });
    return c.status(201).json({
      status: "Created",
      data: adress,
    });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const updatePosts = async (c) => {
  try {
    const Posts = await getByIdPostsService(c.req.params.id);
    if (!Posts) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    const newPostsData = { ...Posts._doc, ...c.req.json() };
    const newPosts = await updatePostsService(c.req.params.id, newPostsData);
    return c.status(200).json({ status: "Success", id: newPosts.id });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const deletePosts = async (c) => {
  try {
    const Posts = await getByIdPostsService(c.req.params.id);
    if (!Posts) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    const deletePosts = await deletePostsService(c.req.params.id);
    return c.status(200).json({ status: "Success", id: deletePosts.id });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
