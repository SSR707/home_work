import {
  createTeacherService,
  deleteTeacherService,
  filterteacherService,
  getAllTeacherService,
  getByIdTeacherService,
  getPageTeacherService,
  searchTeacherService,
  updateTeacherService,
} from "../service/index.js";
import { logger } from "../utils/index.js";
import { TeacherValidation } from "../validation/index.js";

export const getAllTeacher = async (req, res, next) => {
  try {
    const Teacher = await getAllTeacherService();
    return res.status(200).send({ status: "Success", data: Teacher });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const getByIdTeacher = async (req, res, next) => {
  try {
    const teacher = await getByIdTeacherService(req.params.id);
    if (!teacher) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    return res.status(200).send({ status: "Success", data: teacher });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const searchTeacher = async (req, res, next) => {
  try {
    const search = req.query.name || "";
    const Teacher = await searchTeacherService(search);
    if (!Teacher) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Teacher });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
export const filterTeacher = async (req, res, next) => {
  try {
    const key = String(Object.keys(req.query)[0]);
    const Teacher = await filterteacherService(key, req.query[key]);
    if (!Teacher) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Teacher });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
export const getPageTeacher = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const Teacher = await getPageTeacherService(skip, limit);
    return res.status(200).send({ status: "Success", data: Teacher });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const createTeacher = async (req, res, next) => {
  try {
    const { error, value } = TeacherValidation(req.body);
    if (error) {
      return res
        .status(400)
        .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
    }
    const adress = await createTeacherService({ ...req.body });
    return res.status(201).send({
      status: "Created",
      data: adress,
    });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    const teacher = await getByIdTeacherService(req.params.id);
    if (!teacher) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const newteacherData = { ...teacher._doc, ...req.body };
    const newteacher = await updateTeacherService(
      req.params.id,
      newteacherData
    );
    return res.status(200).send({ status: "Success", id: newteacher.id });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const deleteTeacher = async (req, res, next) => {
  try {
    const teacher = await getByIdTeacherService(req.params.id);
    if (!teacher) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const deleteteacher = await deleteTeacherService(req.params.id);
    return res.status(200).send({ status: "Success", id: deleteteacher.id });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
