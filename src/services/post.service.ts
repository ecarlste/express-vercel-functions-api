import { db } from "@/config/db";
import { posts, InsertPost } from "@/schema/posts";
import { eq } from "drizzle-orm";

export const postService = {
  async getAll() {
    return db.query.posts.findMany();
  },

  async getById(id: string) {
    return db.query.posts.findFirst({
      where: eq(posts.id, id),
    });
  },

  async create(data: InsertPost) {
    await db.insert(posts).values(data);
  },

  async update(id: string, data: InsertPost) {
    await db.update(posts).set(data).where(eq(posts.id, id));
  },

  async patch(id: string, data: InsertPost) {
    await db.update(posts).set(data).where(eq(posts.id, id));
  },

  async delete(id: string) {
    await db.delete(posts).where(eq(posts.id, id));
  }
};