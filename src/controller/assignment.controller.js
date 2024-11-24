import {
  getAllAssignmentService,
  getPageAssignmentService,
  filterAssignmentService,
  searchAssignmentService,
  getByIdAssignmentService,
  updateAssignmentService,
  deleteAssignmentService,
  createAssignmentService,
} from "../service/index.js";
import { AssignmentValidation } from "../validation/index.js";

export const getAllAssignment = async (req, res, next) => {
  try {
    const Assignment = await getAllAssignmentService();
    return res.status(200).send({ status: "Success", data: Assignment });
  } catch (error) {
    next(error);
  }
};

export const getByIdAssignment = async (req, res, next) => {
  try {
    const Assignment = await getByIdAssignmentService(req.params.id);
    if (!Assignment) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    return res.status(200).send({ status: "Success", data: Assignment });
  } catch (error) {
    next(error);
  }
};

export const searchAssignment = async (req, res, next) => {
  try {
    const search = req.query.name || "";
    const Assignment = await searchAssignmentService(search);
    if (!Assignment) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Assignment });
  } catch (error) {
    next(error);
  }
};
export const filterAssignment = async (req, res, next) => {
  try {
    const key = String(Object.keys(req.query)[0]);
    const Assignment = await filterAssignmentService(key, req.query[key]);
    if (!Assignment) {
      return res.status(404).send({ msg: "Malumot Topilmadi" });
    }
    return res.status(200).send({ status: "Success", data: Assignment });
  } catch (error) {
    next(error);
  }
};
export const getPageAssignment = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const Assignment = await getPageAssignmentService(skip, limit);
    return res.status(200).send({ status: "Success", data: Assignment });
  } catch (error) {
    next(error);
  }
};

export const createAssignment = async (req, res, next) => {
  try {
    const { error, value } = AssignmentValidation(req.body);
    if (error) {
      return res
        .status(400)
        .send({ msg: "MALUMORLAENI TOQLI VA TOGRI KIRTING" });
    }
    const adress = await createAssignmentService({ ...req.body });
    return res.status(201).send({
      status: "Created",
      data: adress,
    });
  } catch (error) {
    next(error);
  }
};

export const updateAssignment = async (req, res, next) => {
  try {
    const Assignment = await getByIdAssignmentService(req.params.id);
    if (!Assignment) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const newAssignmentData = { ...Assignment._doc, ...req.body };
    const newAssignment = await updateAssignmentService(
      req.params.id,
      newAssignmentData
    );
    return res.status(200).send({ status: "Success", id: newAssignment.id });
  } catch (error) {
    next(error);
  }
};

export const deleteAssignment = async (req, res, next) => {
  try {
    const Assignment = await getByIdAssignmentService(req.params.id);
    if (!Assignment) {
      return res.status(404).send({ msg: "NOT FOUND" });
    }
    const deleteAssignment = await deleteAssignmentService(req.params.id);
    return res.status(200).send({ status: "Success", id: deleteAssignment.id });
  } catch (error) {
    next(error);
  }
};
