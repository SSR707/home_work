import {
    getAllCommentsService,
    getPageCommentsService,
    filterCommentsService,
    searchCommentsService,
    getByIdCommentsService,
    updateCommentsService,
    deleteCommentsService,
    createCommentsService,
  } from "../service/index.js";
  import { logger } from "../utils/index.js";
  import { CommentsValidation } from "../validation/index.js";
  
  export const getAllComments = async (c) => {
    try {
      const Comments = await getAllCommentsService();
      return c.status(200).json({ status: "Success", data: Comments });
    } catch (error) {
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  
  export const getByIdComments = async (c) => {
    try {
      const Comments = await getByIdCommentsService(c.req.params.id);
      if (!Comments) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      return c.status(200).json({ status: "Success", data: Comments });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  
  export const searchComments = async (c) => {
    try {
      const search = c.req.query.name || "";
      const Comments = await searchCommentsService(search);
      if (!Comments) {
        return c.status(404).json({ msg: "Malumot Topilmadi" });
      }
      return c.status(200).json({ status: "Success", data: Comments });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  export const filterComments = async (c) => {
    try {
      const key = String(Object.keys(c.req.query)[0]);
      const Comments = await filterCommentsService(key, c.req.query[key]);
      if (!Comments) {
        return c.status(404).json({ msg: "Malumot Topilmadi" });
      }
      return c.status(200).json({ status: "Success", data: Comments });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  export const getPageComments = async (c) => {
    try {
      const { page, limit } = c.req.query;
      const skip = (page - 1) * limit;
      const Comments = await getPageCommentsService(skip, limit);
      return c.status(200).json({ status: "Success", data: Comments });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  
  export const createComments = async (c) => {
    try {
      const { error, value } = CommentsValidation(c.req.json());
      if (error) {
        return c
          .status(400)
          .json({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
      }
      const adress = await createCommentsService({ ...c.req.json() });
      return c.status(201).json({
        status: "Created",
        data: adress,
      });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  
  export const updateComments = async (c) => {
    try {
      const Comments = await getByIdCommentsService(c.req.params.id);
      if (!Comments) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      const newCommentsData = { ...Comments._doc, ...c.req.json() };
      const newComments = await updateCommentsService(
        c.req.params.id,
        newCommentsData
      );
      return c.status(200).json({ status: "Success", id: newComments.id });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  
  export const deleteComments = async (c) => {
    try {
      const Comments = await getByIdCommentsService(c.req.params.id);
      if (!Comments) {
        return c.status(404).json({ msg: "NOT FOUND" });
      }
      const deleteComments = await deleteCommentsService(c.req.params.id);
      return c.status(200).json({ status: "Success", id: deleteComments.id });
    } catch (error) {
      logger.error(error.message);
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
  