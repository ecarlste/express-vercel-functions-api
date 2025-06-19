import { Request, Response } from "express";
import { z } from "zod";
import { postService } from "@/services/post.service";

const PostSchema = z.object({
  title: z.coerce.string(),
  categoryId: z.coerce.string().cuid2(),
  content: z.coerce.string(),
  isDraft: z.coerce.boolean(),
  publishedAt: z.coerce.date(),
});

export const postController = {
  async getAll(req: Request, res: Response) {
    const list = await postService.getAll();
    res.send(list);
  },

  async getById(req: Request, res: Response) {
    const obj = await postService.getById(req.params.id);
    if (!obj) return void res.sendStatus(404);
    res.send(obj);
  },

  async create(req: Request, res: Response) {
    const validated = PostSchema.safeParse(req.body);
    if (!validated.success) {
      return void res.status(400).send({
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid data",
      });
    }
    await postService.create(validated.data);
    res.sendStatus(201);
  },

  async update(req: Request, res: Response) {
    const validated = PostSchema.safeParse(req.body);
    if (!validated.success) {
      return void res.status(400).send({
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid data",
      });
    }
    await postService.update(req.params.id, validated.data);
    res.sendStatus(200);
  },

  async patch(req: Request, res: Response) {
    const validated = PostSchema.partial().safeParse(req.body);
    if (!validated.success) {
      return void res.status(400).send({
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid data",
      });
    }
    await postService.patch(req.params.id, validated.data);
    res.sendStatus(200);
  },

  async delete(req: Request, res: Response) {
    const obj = await postService.getById(req.params.id);
    if (!obj) return void res.sendStatus(404);
    await postService.delete(req.params.id);
    res.sendStatus(204);
  }
};