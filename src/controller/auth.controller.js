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
  logger,
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

//gogle passport orgali royhatan otish
export const googlePassportRegisterController = async (c) => {
  try {
    const { name, email, googleId } = c.req.user;
    const user = await createUserService({
      name,
      email,
      googleId,
      is_active: true,
    });
    const payload = {
      id: user[0].id,
      sub: email,
      role: user[0].role,
    };
    const accessTokenn = await accessTokenSing(payload);
    const refreshTokenn = await refreshTokenSing(payload);
    return c.status(200).json({ accessTokenn, refreshTokenn });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
export const registerController = async (c) => {
  try {
    const { error, valuse } = registerValidation(c.req.json());
    if (error) {
      c.status(400).text("Ma'lumotlarni to'g'ri kiriting");
    }
    const { email, password } = c.req.json();
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (currentUser.length !== 0) {
      return c.status(409).json({ msg: "Bu email royhatan otilgan" });
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
    const user = await createUserService({ ...c.req.json(), password: hashpass });
    const otp_db = await createOtp({
      user_id: user[0].id,
      otp_code: otp,
    });
    c.status(201).text("created");
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const loginController = async (c) => {
  try {
    const { error, valuse } = loginValidation(c.req.json());
    if (error) {
      c.status(400).text("Mlumotlani togri Kiriting");
    }
    const { email, password } = c.req.json();
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (currentUser.length === 0) {
      return c.status(409).json({ msg: "Bu email royhatan otilgan" });
    }
    if (currentUser[0].is_active === false) {
      return c.status(403).text("User is not active");
    }
    const passwordIsEqual = await comparePassword(
      password,
      currentUser[0].password
    );
    if (!passwordIsEqual) {
      return c.status(403).json({ msg: "Eamil Yoki Parol Xato" });
    }
    const payload = {
      id: currentUser[0].id,
      sub: email,
      role: currentUser[0].role,
    };
    const accessToken = await accessTokenSing(payload);
    const refreshToken = await refreshTokenSing(payload);
    return c.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};

export const verifyToken = async (c) => {
  try {
    const { otp, email } = c.req.json();
    const { error, value } = verifyValidation(c.req.json());
    if (error) {
      return c.status(400).json({ msg: "Mlumotlarni togri kiritig" });
    }
    const currentUser = await db("users")
      .select("*")
      .where("email", "=", email);
    if (!currentUser[0]) {
      return c.status(404).json({ msg: "Foudalanuvchi topilmadi" });
    }
    const currentOtp = await db("otp")
      .select("*")
      .where("user_id", "=", currentUser[0].id);
    if (new Date() > currentOtp[0].expires_at) {
      return c
        .status(403)
        .json({ msg: "Sizni Otp Codeginzni Vohti tugagan" });
    }
    if (!currentOtp[0].otp_code === otp) {
      return c.status(401).json({ msg: "Otp xato kiritilgan" });
    }
    await deleteOtpService(currentUser[0].id);
    await updateUsersService(currentUser[0].id, { is_active: true });
    return c.status(200).json({ msg: "User is Actived" });
  } catch (error) {
    logger.error(error.message);
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
