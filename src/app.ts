import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import { errorHandler } from "@/middlewares/error-handler.middleware";

const app = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(errorHandler);

export default app;
