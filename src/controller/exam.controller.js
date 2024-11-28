import {
    getAllExamService,
    getPageExamService,
    filterExamService,
    searchExamService,
    getByIdExamService,
    updateExamService,
    deleteExamService,
    createExamService,
  } from "../service/index.js";
  import { logger } from "../utils/index.js";
  import { examValidation } from "../validation/index.js";
  
  export const getAllExam = async (req, res, next) => {
    try {
      const Exam = await getAllExamService();
      return res.status(200).send({ status: "Success", data: Exam });
    } catch (error) {
      next(error);
    }
  };
  
  export const getByIdExam = async (req, res, next) => {
    try {
      const Exam = await getByIdExamService(req.params.id);
      if (!Exam) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      return res.status(200).send({ status: "Success", data: Exam });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const searchExam = async (req, res, next) => {
    try {
      const search = req.query.name || "";
      const Exam = await searchExamService(search);
      if (!Exam) {
        return res.status(404).send({ msg: "Malumot Topilmadi" });
      }
      return res.status(200).send({ status: "Success", data: Exam });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  export const filterExam = async (req, res, next) => {
    try {
      const key = String(Object.keys(req.query)[0]);
      const Exam = await filterExamService(key, req.query[key]);
      if (!Exam) {
        return res.status(404).send({ msg: "Malumot Topilmadi" });
      }
      return res.status(200).send({ status: "Success", data: Exam });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  export const getPageExam = async (req, res, next) => {
    try {
      const { page, limit } = req.query;
      const skip = (page - 1) * limit;
      const Exam = await getPageExamService(skip, limit);
      return res.status(200).send({ status: "Success", data: Exam });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const createExam = async (req, res, next) => {
    try {
      const { error, value } = examValidation(req.body);
      if (error) {
        return res
          .status(400)
          .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
      }
      const adress = await createExamService({ ...req.body });
      return res.status(201).send({
        status: "Created",
        data: adress,
      });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const updateExam = async (req, res, next) => {
    try {
      const Exam = await getByIdExamService(req.params.id);
      if (!Exam) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      const newExamData = { ...Exam._doc, ...req.body };
      const newExam = await updateExamService(
        req.params.id,
        newExamData
      );
      return res.status(200).send({ status: "Success", id: newExam.id });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  
  export const deleteExam = async (req, res, next) => {
    try {
      const Exam = await getByIdExamService(req.params.id);
      if (!Exam) {
        return res.status(404).send({ msg: "NOT FOUND" });
      }
      const deleteExam = await deleteExamService(req.params.id);
      return res.status(200).send({ status: "Success", id: deleteExam.id });
    } catch (error) {
      logger.error(error.message);
      next(error);
    }
  };
  