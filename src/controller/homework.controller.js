import {
    getAllHomeworkService,
    getPageHomeworkService,
    filterHomeworkService,
    searchHomeworkService,
    getByIdHomeworkService,
    updateHomeworkService,
    deleteHomeworkService,
    createHomeworkService,
  } from "../service/index.js";
  import { logger } from "../utils/index.js";
  import { homeworkValidation } from "../validation/index.js";
  
  export const getAllHomework = async (req, res, next) => {
    try {
      const Homework = await getAllHomeworkService();
      return res.status(200).send({ status: "Success", data: Homework });
    } catch (error) {
      next(error);
    }
  };
  
  export const getByIdHomework = async (req, res, next) => {
    try {
      const Homework = await getByIdHomeworkService(req.params.id);
      if (!Homework) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      return res.status(200).send({ status: "Success", data: Homework });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const searchHomework = async (req, res, next) => {
    try {
      const search = req.query.name || "";
      const Homework = await searchHomeworkService(search);
      if (!Homework) {
        return res.status(404).send({ msg: "Malumot Topilmadi" });
      }
      return res.status(200).send({ status: "Success", data: Homework });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  export const filterHomework = async (req, res, next) => {
    try {
      const key = String(Object.keys(req.query)[0]);
      const Homework = await filterHomeworkService(key, req.query[key]);
      if (!Homework) {
        return res.status(404).send({ msg: "Malumot Topilmadi" });
      }
      return res.status(200).send({ status: "Success", data: Homework });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  export const getPageHomework = async (req, res, next) => {
    try {
      const { page, limit } = req.query;
      const skip = (page - 1) * limit;
      const Homework = await getPageHomeworkService(skip, limit);
      return res.status(200).send({ status: "Success", data: Homework });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const createHomework = async (req, res, next) => {
    try {
      const { error, value } = homeworkValidation(req.body);
      if (error) {
        return res
          .status(400)
          .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
      }
      const adress = await createHomeworkService({ ...req.body });
      return res.status(201).send({
        status: "Created",
        data: adress,
      });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const updateHomework = async (req, res, next) => {
    try {
      const Homework = await getByIdHomeworkService(req.params.id);
      if (!Homework) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      const newHomeworkData = { ...Homework._doc, ...req.body };
      const newHomework = await updateHomeworkService(
        req.params.id,
        newHomeworkData
      );
      return res.status(200).send({ status: "Success", id: newHomework.id });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const deleteHomework = async (req, res, next) => {
    try {
      const Homework = await getByIdHomeworkService(req.params.id);
      if (!Homework) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      const deleteHomework = await deleteHomeworkService(req.params.id);
      return res.status(200).send({ status: "Success", id: deleteHomework.id });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  