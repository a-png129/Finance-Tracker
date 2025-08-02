import pg from "pg";
import dotenv from "dotenv";
// PostgreSQL connection setup

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;