import pool from "../db/index.js";

export async function getUserQuery(user_id) {
  const result = await pool.query(
    `SELECT *
        FROM users
        WHERE id=$1`,
    [user_id]
  );
  return result.rows[0];
}
