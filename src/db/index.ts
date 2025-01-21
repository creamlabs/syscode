import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env.MYSQL_DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

export const db = drizzle(process.env.DATABASE_URL!);
