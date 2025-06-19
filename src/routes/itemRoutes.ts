import { Router } from "express";
import {
  createItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/itemController";

const router = Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);

export default router;
