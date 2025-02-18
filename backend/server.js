import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./src/routes/users.routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: [
      "https://home-work-besic-todo-task.netlify.app",
      "http://localhost:5173",
    ],
  })
);
app.use(express.json());

app.use("/users", userRoutes);

app.listen(3333, async () => {
  await mongoose.connect(
    "mongodb+srv://samandar:saman77071!@mongodb-demo.6k1pd.mongodb.net/user-crud"
  );
  console.log("3333 Started");
});
