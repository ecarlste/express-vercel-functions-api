import { db } from "@/config/db";
import { categories, InsertCategory } from "@/schema/categories";
import { eq } from "drizzle-orm";

export const categoryService = {
  async getAll() {
    return db.query.categories.findMany();
  },

  async getById(id: string) {
    return db.query.categories.findFirst({
      where: eq(categories.id, id),
    });
  },

  async create(data: InsertCategory) {
    await db.insert(categories).values(data);
  },

  async update(id: string, data: InsertCategory) {
    await db.update(categories).set(data).where(eq(categories.id, id));
  },

  async patch(id: string, data: InsertCategory) {
    await db.update(categories).set(data).where(eq(categories.id, id));
  },

  async delete(id: string) {
    await db.delete(categories).where(eq(categories.id, id));
  }
};