import { sql, relations } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
} from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

import { categories } from "@/schema/categories";

export const posts = sqliteTable(
  "posts",
  {
    id: text().primaryKey().$defaultFn(() => createId()),
    title: text(),
    categoryId: text().references(() => categories.id),
    content: text(),
    isDraft: integer({ mode: "boolean" } ),
    publishedAt: integer({ mode: "timestamp" }),
    createdAt: integer({ mode: "timestamp" }).notNull().default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer({ mode: "timestamp" }).notNull().default(sql`(strftime('%s', 'now'))`).$onUpdate(() => new Date()),
  }
)

export type SelectPost = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;

export const postsRelations = relations(posts, ({ one, many }) => ({
  category: one(categories, {
    fields: [posts.categoryId],
    references: [categories.id]
  }),
}));
