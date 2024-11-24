import app from "./src/app.js";
import { config } from "./src/config/index.js";
import db from "./src/config/db.js";

const startApp = async () => {
  try {
    app.listen(config.port.port, () => {
      console.log(`${config.port.port} started ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
