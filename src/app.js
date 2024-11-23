import express from "express";
import morgan from "morgan";
import { createTebals } from "./database/index.js";
import { error } from "winston";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/setup", async (req, res) => {
  await createTebals();
  res.send("ok");
});

app.use((err, req, res) => {
  if (err) return res.send(err.messages);
  res.send("Not found");
});


export default app