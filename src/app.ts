import express from "express";
import itemRoutes from "./routes/itemRoutes";

const app = express();

app.use(express.json());

app.use("/api/items", itemRoutes);

export default app;
