import { Request, Response } from "express";
import { z } from "zod";
import { categoryService } from "@/services/category.service";

const CategorySchema = z.object({
  name: z.coerce.string(),
});

export const categoryController = {
  async getAll(req: Request, res: Response) {
    const list = await categoryService.getAll();
    res.send(list);
  },

  async getById(req: Request, res: Response) {
    const obj = await categoryService.getById(req.params.id);
    if (!obj) return void res.sendStatus(404);
    res.send(obj);
  },

  async create(req: Request, res: Response) {
    const validated = CategorySchema.safeParse(req.body);
    if (!validated.success) {
      return void res.status(400).send({
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid data",
      });
    }
    await categoryService.create(validated.data);
    res.sendStatus(201);
  },

  async update(req: Request, res: Response) {
    const validated = CategorySchema.safeParse(req.body);
    if (!validated.success) {
      return void res.status(400).send({
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid data",
      });
    }
    await categoryService.update(req.params.id, validated.data);
    res.sendStatus(200);
  },

  async patch(req: Request, res: Response) {
    const validated = CategorySchema.partial().safeParse(req.body);
    if (!validated.success) {
      return void res.status(400).send({
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid data",
      });
    }
    await categoryService.patch(req.params.id, validated.data);
    res.sendStatus(200);
  },

  async delete(req: Request, res: Response) {
    const obj = await categoryService.getById(req.params.id);
    if (!obj) return void res.sendStatus(404);
    await categoryService.delete(req.params.id);
    res.sendStatus(204);
  }
};