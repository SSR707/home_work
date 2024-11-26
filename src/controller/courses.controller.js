import {
  getAllCoursesService,
  getPageCoursesService,
  filterCoursesService,
  searchCoursesService,
  getByIdCoursesService,
  updateCoursesService,
  deleteCoursesService,
  createCoursesService,
} from "../service/index.js";
import { logger } from "../utils/index.js";
import { CoursesValidation } from "../validation/index.js";

export const getAllCourses = async (req, res, next) => {
  try {
    const Courses = await getAllCoursesService();
    return res.status(200).send({ status: "Success", data: Courses });
  } catch (error) {
    next(error);
  }
};

export const getByIdCourses = async (req, res, next) => {
  try {
    const Courses = await getByIdCoursesService(req.params.id);
    if (!Courses) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    return res.status(200).send({ status: "Success", data: Courses });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const searchCourses = async (req, res, next) => {
  try {
    const search = req.query.name || "";
    const Courses = await searchCoursesService(search);
    if (!Courses) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Courses });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
export const filterCourses = async (req, res, next) => {
  try {
    const key = String(Object.keys(req.query)[0]);
    const Courses = await filterCoursesService(key, req.query[key]);
    if (!Courses) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Courses });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
export const getPageCourses = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const Courses = await getPageCoursesService(skip, limit);
    return res.status(200).send({ status: "Success", data: Courses });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const createCourses = async (req, res, next) => {
  try {
    const { error, value } = CoursesValidation(req.body);
    if (error) {
      return res
        .status(400)
        .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
    }
    const adress = await createCoursesService({ ...req.body });
    return res.status(201).send({
      status: "Created",
      data: adress,
    });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const updateCourses = async (req, res, next) => {
  try {
    const Courses = await getByIdCoursesService(req.params.id);
    if (!Courses) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const newCoursesData = { ...Courses._doc, ...req.body };
    const newCourses = await updateCoursesService(
      req.params.id,
      newCoursesData
    );
    return res.status(200).send({ status: "Success", id: newCourses.id });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

export const deleteCourses = async (req, res, next) => {
  try {
    const Courses = await getByIdCoursesService(req.params.id);
    if (!Courses) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const deleteCourses = await deleteCoursesService(req.params.id);
    return res.status(200).send({ status: "Success", id: deleteCourses.id });
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};
