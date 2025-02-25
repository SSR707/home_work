import { Users } from "../model/users.model.js";

export const findAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    return res.status(200).send({ message: "Success", users });
  } catch (error) {
    next(error);
  }
};

export const findOneUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) {
      res.status(404).send({
        status: "Not Found",
      });
    }
    res.status(200).send({
      status: "Success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { name, age, email, address, password } = req.body;
    const user = new Users({
      name,
      age,
      email,
      address,
      password,
    });
    await user.save();
    return res.status(201).send({ message: "Created", user: user.id });
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) {
      res.status(404).send({
        status: "Not Found",
      });
    }
    const { name, age, email, address ,password} = req.body;
    const newUserData = {
      ...user._doc,
      name,
      age,
      email,
      address,
      password
    };
    const updatedUser = await Users.findByIdAndUpdate(id, newUserData);
    return res
      .status(200)
      .send({ status: 200, message: "Success", user_id: updatedUser._id });
  } catch (error) {
    next(error);
  }
};
export const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) {
      res.status(404).send({
        status: "Not Found",
      });
    }
    await Users.findByIdAndDelete(req.params.id);

    res.status(200).send({
      status: "Success",
      id: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};
