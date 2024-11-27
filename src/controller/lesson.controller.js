import {
    getAllLessonService,
    getPageLessonService,
    filterLessonService,
    searchLessonService,
    getByIdLessonService,
    updateLessonService,
    deleteLessonService,
    createLessonService,
  } from "../service/index.js";
  import { logger } from "../utils/index.js";
  import { lessonValidation } from "../validation/index.js";
  
  export const getAllLesson = async (req, res, next) => {
    try {
      const Lesson = await getAllLessonService();
      return res.status(200).send({ status: "Success", data: Lesson });
    } catch (error) {
      next(error);
    }
  };
  
  export const getByIdLesson = async (req, res, next) => {
    try {
      const Lesson = await getByIdLessonService(req.params.id);
      if (!Lesson) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      return res.status(200).send({ status: "Success", data: Lesson });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const searchLesson = async (req, res, next) => {
    try {
      const search = req.query.name || "";
      const Lesson = await searchLessonService(search);
      if (!Lesson) {
        return res.status(404).send({ msg: "Malumot Topilmadi" });
      }
      return res.status(200).send({ status: "Success", data: Lesson });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  export const filterLesson = async (req, res, next) => {
    try {
      const key = String(Object.keys(req.query)[0]);
      const Lesson = await filterLessonService(key, req.query[key]);
      if (!Lesson) {
        return res.status(404).send({ msg: "Malumot Topilmadi" });
      }
      return res.status(200).send({ status: "Success", data: Lesson });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  export const getPageLesson = async (req, res, next) => {
    try {
      const { page, limit } = req.query;
      const skip = (page - 1) * limit;
      const Lesson = await getPageLessonService(skip, limit);
      return res.status(200).send({ status: "Success", data: Lesson });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const createLesson = async (req, res, next) => {
    try {
      const { error, value } = lessonValidation(req.body);
      if (error) {
        return res
          .status(400)
          .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
      }
      const adress = await createLessonService({ ...req.body });
      return res.status(201).send({
        status: "Created",
        data: adress,
      });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const updateLesson = async (req, res, next) => {
    try {
      const Lesson = await getByIdLessonService(req.params.id);
      if (!Lesson) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      const newLessonData = { ...Lesson._doc, ...req.body };
      const newLesson = await updateLessonService(
        req.params.id,
        newLessonData
      );
      return res.status(200).send({ status: "Success", id: newLesson.id });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const deleteLesson = async (req, res, next) => {
    try {
      const Lesson = await getByIdLessonService(req.params.id);
      if (!Lesson) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      const deleteLesson = await deleteLessonService(req.params.id);
      return res.status(200).send({ status: "Success", id: deleteLesson.id });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  