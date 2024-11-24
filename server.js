import app from "./src/app.js";
import { config } from "./src/config/index.js";
import port from "./src/config/port.js";

const startApp = async () => {
  try {
    app.listen(config.port.port, () => {
      console.log(`${config.port.port} started ...`);
    });
  } catch (error) {
    console.log(error)
  }
};

startApp();
