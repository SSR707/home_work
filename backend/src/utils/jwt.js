import Jwt from "jsonwebtoken";

export const AccessToken = (payload) => {
  return Jwt.sign(payload, "qwert123", { expiresIn: "1d" });
};
