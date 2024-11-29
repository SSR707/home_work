import {
    getAllTagsService,
    getPageTagsService,
    filterTagsService,
    searchTagsService,
    getByIdTagsService,
    updateTagsService,
    deleteTagsService,
    createTagsService,
  } from "../service/index.js";
  import { logger } from "../utils/index.js";
  import { TagsValidation } from "../validation/index.js";
  
  export const getAllTags = async (c) => {
    try {
      const Tags = await getAllTagsService();
      return c.status(200).json({ status: "Success", data: Tags });
    } catch (error) {
      c.next(error);
    }
  };
  
  export const getByIdTags = async (c) => {
    try {
      const Tags = await getByIdTagsService(c.req.params.id);
      if (!Tags) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      return c.status(200).json({ status: "Success", data: Tags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const searchTags = async (c) => {
    try {
      const search = c.req.query.name || "";
      const Tags = await searchTagsService(search);
      if (!Tags) {
        return c.status(404).json({ msg: "Malumot Topilmadi" });
      }
      return c.status(200).json({ status: "Success", data: Tags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  export const filterTags = async (c) => {
    try {
      const key = String(Object.keys(c.req.query)[0]);
      const Tags = await filterTagsService(key, c.req.query[key]);
      if (!Tags) {
        return c.status(404).json({ msg: "Malumot Topilmadi" });
      }
      return c.status(200).json({ status: "Success", data: Tags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  export const getPageTags = async (c) => {
    try {
      const { page, limit } = c.req.query;
      const skip = (page - 1) * limit;
      const Tags = await getPageTagsService(skip, limit);
      return c.status(200).json({ status: "Success", data: Tags });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const createTags = async (c) => {
    try {
      const { error, value } = TagsValidation(c.req.json());
      if (error) {
        return c.status(400).json({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
      }
      const adress = await createTagsService({ ...c.req.json() });
      return c.status(201).json({
        status: "Created",
        data: adress,
      });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const updateTags = async (c) => {
    try {
      const Tags = await getByIdTagsService(c.req.params.id);
      if (!Tags) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      const newTagsData = { ...Tags._doc, ...c.req.json() };
      const newTags = await updateTagsService(c.req.params.id, newTagsData);
      return c.status(200).json({ status: "Success", id: newTags.id });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  
  export const deleteTags = async (c) => {
    try {
      const Tags = await getByIdTagsService(c.req.params.id);
      if (!Tags) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      const deleteTags = await deleteTagsService(c.req.params.id);
      return c.status(200).json({ status: "Success", id: deleteTags.id });
    } catch (error) {
      logger.error(error.message);
      c.next(error);
    }
  };
  