import { logger } from "../../utils/index.js";

export const roleGuard = (...roles) => {
  return async (c) => {
    try {
      const { role } = c.req.user;
      logger.info(role);
      if (!roles.includes(role)) {
        logger.info("access deny!");
      }
      c.next();
    } catch (e) {
      logger.error(e)
      return c.json({ status: "Error", message: error.message }, 500);
    }
  };
};
