import { registerValidation } from "../validation/index.js";
import db from "../database/db.js";
import { otpGenerate } from "../utils/index.js";

export const registerController = async (req, res, next) => {
  try {
    const { error, valuse } = registerValidation(req.body);
    if (error) {
      res.status(400).send("Mlumotlani togri Kiriting");
    }
    const { email } = req.body;
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (currentUser) {
      return res.status(409).send({ msg: "Bu email royhatan otilgan" });
    }
    const otp = otpGenerate();
    sendMail(
      email,
      "OTP",
      `<h1>
        This Your otp: 
        <h2 style="background: yellow;color: rgb(0, 0, 0);width: 7%;">${otp}</h2>
        </h1>`
    );
    const user = createUser(req.body);
    const otp_db = createOtp({
      user_id: user.id,
      otp_code: otp,
    });
    res.status(201).send("created");
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { error, valuse } = loginValidation(req.body);
    if (error) {
      res.status(400).send("Mlumotlani togri Kiriting");
    }
    const { email, password } = req.body;
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (!currentUser) {
      return res.status(409).send({ msg: "Bu email royhatan otilgan" });
    }
    if (currentUser.is_active === false) {
      return res.status(403).send("User is not active");
    }
    res.status(201).send("created");
  } catch (error) {
    next(error);
  }
};
