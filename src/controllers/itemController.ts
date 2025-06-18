import { NextFunction, Request, Response } from "express";
import { items } from "../models/item";

export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(items);
  } catch (error) {
    next(error);
  }
};
