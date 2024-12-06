import express, { Request, Response, Application, NextFunction } from "express";
import { config } from "dotenv";
import mangoose from "mongoose";
import routes from "./routes/index.routes";
config()

const app: Application = express();

app.use(express.json());
app.use("/api/v1", routes);

app.use((req: Request, res: Response) => {
  res.status(404).send({ message: "Route is not found!" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ error: err.message });
});

app.listen(process.env.PORT, async () => {
  try {
    console.log(`${process.env.PORT} port connecd`);
    await mangoose.connect('mongodb://127.0.0.1:27017/blogpost');
    console.log("db connectig");
  } catch (err) {
    console.log(err);
  }
});
