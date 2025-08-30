import pool from "../db/index.js";

export async function createTransactionQuery(
  user_id,
  amount,
  category_id,
  description,
  transDate
) {
  const result = await pool.query(
    `INSERT INTO transactions (user_id, amount, category_id, description, transDate)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
    [user_id, amount, category_id, description, transDate]
  );
  return result.rows[0];
}

export async function getTransactionsQuery(user_id) {
  const result = await pool.query(
    `SELECT t.id, t.amount, c.transType, t.description, t.transDate, c.categoryTitle, c.categoryColour
        FROM transactions t, categories c
        WHERE t.user_id=$1 AND c.user_id=$1 AND t.category_id=c.id
        ORDER BY transDate DESC`,
    [user_id]
  );
  return result.rows;
}

export async function getTotalAmount(user_id, type) {
  const result = await pool.query(
    `SELECT COALESCE(SUM(t.amount), 0) AS total 
        FROM transactions t
        JOIN categories c ON t.category_id=c.id
        WHERE t.user_id=$1 AND c.user_id=$1 AND c.transType=$2`,
    [user_id, type]
  );
  return result.rows[0].total;
}

export async function getCategoriesQuery(user_id, type) {
  const result = await pool.query(
    `SELECT id, categoryTitle, categoryColour
        FROM categories
        WHERE user_id=$1 AND transType=$2
        ORDER BY categoryTitle`,
    [user_id, type]
  );
  return result.rows
}