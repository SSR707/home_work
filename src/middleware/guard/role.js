import { logger } from "../../utils/index.js";

export const roleGuard = (...roles) => {
  return async (req, res, next) => {
    try {
      const { role } = req.user;
      logger.info(role);
      if (!roles.includes(role)) {
        logger.info("access deny!");
      }
      next();
    } catch (e) {
      logger.error(e)
      next(e);
    }
  };
};
