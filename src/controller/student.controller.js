import {
  getAllStudentService,
  getPageStudentService,
  filterStudentService,
  searchStudentService,
  getByIdStudentService,
  createStudentService,
  updateStudentService,
  deleteStudentService,
} from "../service/index.js";
import { StudentsValidation } from "../validation/index.js";

export const getAllStudents = async (req, res, next) => {
  try {
    const Students = await getAllStudentService();
    return res.status(200).send({ status: "Success", data: Students });
  } catch (error) {
    next(error);
  }
};

export const getByIdStudents = async (req, res, next) => {
  try {
    const Students = await getByIdStudentService(req.params.id);
    if (!Students) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    return res.status(200).send({ status: "Success", data: Students });
  } catch (error) {
    next(error);
  }
};

export const searchStudents = async (req, res, next) => {
  try {
    const search = req.query.name || "";
    const Students = await searchStudentService(search);
    if (!Students) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Students });
  } catch (error) {
    next(error);
  }
};
export const filterStudents = async (req, res, next) => {
  try {
    const key = String(Object.keys(req.query)[0]);
    const Students = await filterStudentService(key, req.query[key]);
    if (!Students) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Students });
  } catch (error) {
    next(error);
  }
};
export const getPageStudents = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const Students = await getPageStudentService(skip, limit);
    return res.status(200).send({ status: "Success", data: Students });
  } catch (error) {
    next(error);
  }
};

export const createStudents = async (req, res, next) => {
  try {
    const { error, value } = StudentsValidation(req.body);
    if (error) {
      return res
        .status(400)
        .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
    }
    const adress = await createStudentService({ ...req.body });
    return res.status(201).send({
      status: "Created",
      data: adress,
    });
  } catch (error) {
    next(error);
  }
};

export const updateStudents = async (req, res, next) => {
  try {
    const Students = await getByIdStudentService(req.params.id);
    if (!Students) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const newStudentsData = { ...Students._doc, ...req.body };
    const newStudents = await updateStudentService(
      req.params.id,
      newStudentsData
    );
    return res.status(200).send({ status: "Success", id: newStudents.id });
  } catch (error) {
    next(error);
  }
};

export const deleteStudents = async (req, res, next) => {
  try {
    const Students = await getByIdStudentService(req.params.id);
    if (!Students) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const deleteStudents = await deleteStudentService(req.params.id);
    return res.status(200).send({ status: "Success", id: deleteStudents.id });
  } catch (error) {
    next(error);
  }
};
