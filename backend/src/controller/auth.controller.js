import { Users } from "../model/users.model.js";
import { AccessToken } from "../utils/jwt.js";

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User Not Found ", status: 404 });
    }
    if (user.password !== password) {
      return res
        .status(401)
        .send({ message: "Email or Password invalid ", status: 401 });
    }
    const payload = {
      sub: user.email,
      id: user._id,
    };
    const accessToken = await AccessToken(payload);

    return res.status(200).send({
      message: "Success",
      status: 200,
      data: { user: payload, accessToken },
    });
  } catch (error) {
    next(error);
  }
};
