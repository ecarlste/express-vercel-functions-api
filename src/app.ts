import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import postRoutes from "@/routes/post.routes";
import categoryRoutes from "@/routes/category.routes";
import { errorHandler } from "@/middlewares/error-handler.middleware";

const app = express();

app.use(bodyParser.json());
app.use("/posts", postRoutes);
app.use("/categories", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(errorHandler);

export default app;
