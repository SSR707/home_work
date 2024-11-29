import {
  getAllUsersService,
  getPageUsersService,
  filterUsersService,
  searchUsersService,
  getByIdUsersService,
  updateUsersService,
  deleteUsersService,
  getProfileService,
} from "../service/index.js";
import { logger } from "../utils/index.js";

export const getProfile = async (c) => {
  try {
    const user = await getProfileService(c.datareq.user.sub);
    return c.status(200).json({ status: "Success", data: user });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const getAllUsers = async (c) => {
  try {
    const users = await getAllUsersService();
    return c.status(200).json({ status: "Success", data: users });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const getByIdUser = async (c) => {
  try {
    const user = await getByIdUsersService(c.req.params.id);
    if (!user) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    return c.status(200).json({ status: "Success", data: user });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const searchrUser = async (c) => {
  try {
    const search = c.req.query.name || "";
    const users = await searchUsersService(search);
    if (!users) {
      return c.status(404).json({ msg: "Malumot Topilmadi" });
    }
    return c.status(200).json({ status: "Success", data: users });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const filterUser = async (c) => {
  try {
    const key = String(Object.keys(c.req.query)[0]);
    const users = await filterUsersService(key, c.req.query[key]);
    if (!users) {
      return c.status(404).json({ msg: "Malumot Topilmadi" });
    }
    return c.status(200).json({ status: "Success", data: users });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const getPageUser = async (c) => {
  try {
    const { page, limit } = c.req.query;
    const skip = (page - 1) * limit;
    const users = await getPageUsersService(skip, limit);
    return c.status(200).json({ status: "Success", data: users });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const updateUser = async (c) => {
  try {
    const user = await getByIdUsersService(c.req.params.id);
    if (!user) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    const newUserData = { ...user._doc, ...c.req.json() };
    const newUser = await updateUsersService(c.req.params.id, newUserData);
    return c.status(200).json({ status: "Success", id: newUser.id });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const deleteUser = async (c) => {
  try {
    const user = await getByIdUsersService(c.req.params.id);
    if (!user) {
      return c.status(404).json({ msg: "NOT FOUND" });
    }
    const deleteUser = await deleteUsersService(c.req.params.id);
    return c.status(200).json({ status: "Success", id: deleteUser.id });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
