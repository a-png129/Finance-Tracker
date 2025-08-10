import pool from "../db/index.js";

export async function createTransactionQuery(
  user_id,
  amount,
  transType,
  category,
  description,
  transDate
) {
  const result = await pool.query(
    `INSERT INTO transactions (user_id, amount, transType, category, description, transDate)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
    [user_id, amount, transType, category, description, transDate]
  );
  return result.rows[0];
}

export async function getTransactionsQuery(user_id) {
  const result = await pool.query(
    `SELECT * FROM transactions
        WHERE user_id = $1
        ORDER BY transDate DESC`,
    [user_id]
  );
  return result.rows;
}

export async function getTotalAmount(user_id, type) {
  const result = await pool.query(
    `SELECT SUM(amount) 
        FROM transactions
        WHERE user_id=$1 AND transType=$2`,
    [user_id, type]
  );
  return result.rows[0].sum;
}
