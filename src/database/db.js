import knex from "knex";
import { config } from "../config/index.js";

const db = knex({
  client: "pg",
  connection: {
    host: config.db.host,
    port: config.db.port,
    user:config.db.user,
    password:config.db.password,
    database:config.db.database
  },
});

export default db
