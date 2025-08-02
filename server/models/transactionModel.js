import pool from "../db/index.js";

export async function createTransactionQuery(
  user_id,
  amount,
  type,
  category,
  description,
  transactionDate
) {
  const result = await pool.query(
    `INSERT INTO transactions (user_id, amount, type, category, description, transactionDate)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
    [user_id, amount, type, category, description, transactionDate]
  );
  return result.rows[0];
}

export async function getTransactionsQuery(user_id) {
  const result = await pool.query(
    `SELECT * FROM transactions
        WHERE user_id = $1
        ORDER BY transactionDate DESC`,
    [user_id]
  );
  return result.rows;
}
