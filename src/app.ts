import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import categoryRoutes from "@/routes/category.routes";
import { errorHandler } from "@/middlewares/error-handler.middleware";

const app = express();

app.use(bodyParser.json());
app.use("/categories", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(errorHandler);

export default app;
