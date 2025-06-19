import express from "express";
import { categoryController } from "@/controllers/category.controller";

export const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.patch("/:id", categoryController.patch);
router.delete("/:id", categoryController.delete);

export default router;