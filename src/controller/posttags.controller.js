import {
    getAllPostTagsService,
    getPagePostTagsService,
    filterPostTagsService,
    searchPostTagsService,
    getByIdPostTagsService,
    updatePostTagsService,
    deletePostTagsService,
    createPostTagsService,
  } from "../service/index.js";
  import { logger } from "../utils/index.js";
  import { PostTagsValidation } from "../validation/index.js";
  
  export const getAllPostTags = async (c) => {
    try {
      const PostTags = await getAllPostTagsService();
      return c.status(200).json({ status: "Success", data: PostTags });
    } catch (error) {
      c.next(error);
    }
  };
  
  export const getByIdPostTags = async (c) => {
    try {
      const PostTags = await getByIdPostTagsService(c.req.params.id);
      if (!PostTags) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      return c.status(200).json({ status: "Success", data: PostTags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const searchPostTags = async (c) => {
    try {
      const search = c.req.query.name || "";
      const PostTags = await searchPostTagsService(search);
      if (!PostTags) {
        return c.status(404).json({ msg: "Malumot Topilmadi" });
      }
      return c.status(200).json({ status: "Success", data: PostTags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  export const filterPostTags = async (c) => {
    try {
      const key = String(Object.keys(c.req.query)[0]);
      const PostTags = await filterPostTagsService(key, c.req.query[key]);
      if (!PostTags) {
        return c.status(404).json({ msg: "Malumot Topilmadi" });
      }
      return c.status(200).json({ status: "Success", data: PostTags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  export const getPagePostTags = async (c) => {
    try {
      const { page, limit } = c.req.query;
      const skip = (page - 1) * limit;
      const PostTags = await getPagePostTagsService(skip, limit);
      return c.status(200).json({ status: "Success", data: PostTags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const createPostTags = async (c) => {
    try {
      const { error, value } = PostTagsValidation(c.req.json());
      if (error) {
        return c.status(400).json({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
      }
      const adress = await createPostTagsService({ ...c.req.json() });
      return c.status(201).json({
        status: "Created",
        data: adress,
      });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const updatePostTags = async (c) => {
    try {
      const PostTags = await getByIdPostTagsService(c.req.params.id);
      if (!PostTags) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      const newPostTagsData = { ...PostTags._doc, ...c.req.json() };
      const newPostTags = await updatePostTagsService(c.req.params.id, newPostTagsData);
      return c.status(200).json({ status: "Success", id: newPostTags.id });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const deletePostTags = async (c) => {
    try {
      const PostTags = await getByIdPostTagsService(c.req.params.id);
      if (!PostTags) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      const deletePostTags = await deletePostTagsService(c.req.params.id);
      return c.status(200).json({ status: "Success", id: deletePostTags.id });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  