import app from "./src/app.js";
import { serve } from "@hono/node-server";
import { config } from "./src/config/index.js";
import { logger } from "./src/utils/index.js";
const startApp = async () => {
  try {
    logger.info(`Server runnig ${config.port.port}`);
    serve({
      fetch: app.fetch,
      port:config.port.port,
    });
  } catch (error) {
    logger.error(error);
  }
};

startApp();
