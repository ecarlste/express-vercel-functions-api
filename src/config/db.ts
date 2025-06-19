import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { env } from "@/config/env";
import * as schema from "@/config/schema";

const sqlite = new Database(env.DB_URL);

export const db = drizzle(sqlite, { schema, casing: "snake_case" });

export async function openConnection() {
  const betterSqlite = new Database(env.DB_URL);
  const db = drizzle(betterSqlite, { schema, casing: "snake_case" });
  const closeConnection = async () => await betterSqlite.close();
  return {
    db,
    closeConnection,
  }
}