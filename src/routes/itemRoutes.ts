import { Router } from "express";
import {
  createItem,
  getItemById,
  getItems,
} from "../controllers/itemController";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);

export default router;
