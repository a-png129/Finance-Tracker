import {
  createTransactionQuery,
  getTransactionsQuery,
} from "../models/transactionModel.js";

export const createTransaction = async (req, res) => {
  const { amount, type, category, description, transactionDate } = req.body;
  // const user_id = req.user.id;
  const user_id = 1;
  try {
    const transaction = await createTransactionQuery(
      user_id,
      amount,
      type,
      category,
      description,
      transactionDate
    );
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

export const getTransactions = async (req, res) => {
  // const user_id = req.user.id;
  const user_id = 1;
  try {
    const transactions = await getTransactionsQuery(user_id);
    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};
