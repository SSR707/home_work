import express from "express";
import morgan from "morgan";
import { createTebals } from "./database/tebals.js";
import {
  assignmentRouter,
  authRouter,
  coursesRouter,
  homeworkRouter,
  lessonRouter,
  studentsRouter,
  teacherRouter,
  userRouter,
} from "./routes/index.js";
import { authGuard } from "./middleware/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authGuard, userRouter);
app.use("/api/v1/teacher", authGuard, teacherRouter);
app.use("/api/v1/students", authGuard, studentsRouter);
app.use("/api/v1/assignment", authGuard, assignmentRouter);
app.use("/api/v1/courses", authGuard, coursesRouter)
app.use("/api/v1/homework", authGuard, homeworkRouter);
app.use("/api/v1/lesson", authGuard, lessonRouter);;

app.get("/api/v1/setup", async (req, res) => {
  await createTebals();
  res.send("ok");
});

app.use((err, req, res, next) => {
  if (err) return res.send(err.messages);
  res.send("Not found");
});

export default app;
