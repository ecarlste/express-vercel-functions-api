import express from "express";
import { postController } from "@/controllers/post.controller";

export const router = express.Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.patch("/:id", postController.patch);
router.delete("/:id", postController.delete);

export default router;