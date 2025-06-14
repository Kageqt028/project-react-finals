import { drizzle } from "drizzle-orm/neon-http";
import { env } from "~/env";
import * as schema from "./schema";
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config({ path: ".env" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
