import { Hono } from "hono";
import morgan from "morgan";
import { createTebals } from "./database/tebals.js";
import { authGuard } from "./middleware/index.js";
import {
  authRouter,
  userRouter,
  categoriesRouter,
  commentsRouter,
  postsRouter,
  posttagsRouter,
  tagsRouter,
} from "./routes/index.js";

const app = new Hono();
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authGuard, userRouter);
app.use("/api/v1/categories", authGuard, categoriesRouter);
app.use("/api/v1/comments", authGuard, commentsRouter);
app.use("/api/v1/posts", authGuard, postsRouter);
app.use("/api/v1/posttags", authGuard, posttagsRouter);
app.use("/api/v1/tags", authGuard, tagsRouter);

app.get("/api/v1/setup", async (c) => {
  await createTebals();
  c.text("ok");
});

app.use((err, c) => {
  if (err) return c.json({ err: err.messages });
  c.json({ status: "Error", message: err.message }, 500);
});

export default app;
