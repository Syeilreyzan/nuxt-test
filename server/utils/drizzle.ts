import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "../db/schema";
import path from "path";

// Ensure the path is absolute relative to the project root
const dbPath = path.resolve(process.cwd(), process.env.DATABASE_URL || "db.sqlite");

// Create the driver instance
const sqlite = new Database(dbPath);
const db = drizzle(sqlite, { schema });

export function useDrizzle() {
    return db;
}
