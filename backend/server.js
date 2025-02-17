import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./src/routes/users.routes.js";
import path from 'path'
import cors from "cors";

const app = express();
app.use(express.static(path.join(process.cwd , '../frontend' )));
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3333, async () => {
  await mongoose.connect(
    "mongodb+srv://samandar:saman77071!@mongodb-demo.6k1pd.mongodb.net/user-crd"
  );
  console.log("3333 Started");
});
