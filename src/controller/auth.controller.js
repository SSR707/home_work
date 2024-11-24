import { compare } from "bcrypt";
import {
  loginValidation,
  registerValidation,
  verifyValidation,
} from "../validation/index.js";
import db from "../database/db.js";
import {
  accessTokenSing,
  comparePassword,
  hashPassword,
  otpGenerate,
  refreshTokenSing,
  sendMail,
} from "../utils/index.js";
import {
  createOtp,
  createUserService,
  deleteOtpService,
  updateUsersService,
} from "../service/index.js";

export const registerController = async (req, res, next) => {
  try {
    const { error, valuse } = registerValidation(req.body);
    if (error) {
      res.status(400).send("Mlumotlani togri Kiriting");
    }
    const { email, password } = req.body;
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (currentUser.length !== 0) {
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
    const hashpass = await hashPassword(password);
    const user = await createUserService({ ...req.body, password: hashpass });
    const otp_db = await createOtp({
      user_id: user[0].id,
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
    if (currentUser.length === 0) {
      return res.status(409).send({ msg: "Bu email royhatan otilgan" });
    }
    if (currentUser[0].is_active === false) {
      return res.status(403).send("User is not active");
    }
    const passwordIsEqual = await comparePassword(
      password,
      currentUser[0].password
    );
    if (!passwordIsEqual) {
      return res.status(403).send({ msg: "Eamil Yoki Parol Xato" });
    }
    const payload = {
      id: currentUser[0].id,
      sub: email,
      role: "student",
    };
    const accessToken = await accessTokenSing(payload);
    const refreshToken = await refreshTokenSing(payload);
    return res.status(200).send({ accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export const verifyToken = async (req, res, next) => {
  try {
    const { otp, email } = req.body;
    const { error, value } = verifyValidation(req.body);
    if (error) {
      return res.status(400).send({ msg: "Mlumotlarni togri kiritig" });
    }
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (!currentUser[0]) {
      return res.status(404).send({ msg: "Foudalanuvchi topilmadi" });
    }
    const currentOtp = await db("otp")
      .select("*")
      .where("user_id", "=", currentUser[0].id);
    if (new Date() > currentOtp[0].expires_at) {
      return res
        .status(403)
        .send({ msg: "Sizni Otp Codeginzni Vohti tugagan" });
    }
    if (!currentOtp[0].otp_code === otp) {
      return res.status(401).send({ msg: "Otp xato kiritilgan" });
    }
    await deleteOtpService(currentUser[0].id);
    await updateUsersService(currentUser[0].id, { is_active: true });
    return res.status(200).send({ msg: "User is Actived" });
  } catch (error) {
    next(error);
  }
};
