import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/itemController";

const router = Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
