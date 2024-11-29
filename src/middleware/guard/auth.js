import jwt from "jsonwebtoken";
import { config } from "../../config/index.js";
import { logger } from "../../utils/index.js";
export const authGuard = (c) => {
  try {
    if (!c.req.headers.authorization) {
      return c.status(409).json("token not found");
    }
    const [type, token] = c.req.headers.authorization?.split(" ");
    if (type !== "Bearer" || !token) {
      return c.status(409).json("Not valid Data");
    }
    jwt.verify(token, config.jwt.access.secret, (err, payload) => {
      if (err) {
        logger.error(err);
        return c.status(403).json("Forbidden");
      }
      c.req.user = payload;
    });
  } catch (error) {
    return c.json({ status: "Error", message: error.message }, 500);
  }
};
