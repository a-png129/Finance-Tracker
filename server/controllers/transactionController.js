import {
  createTransactionQuery,
  getTransactionsQuery,
  getTotalAmount,
} from "../models/transactionModel.js";

export const createTransaction = async (req, res) => {
  const { amount, transType, category, description, transDate } = req.body;
  const user_id = req.user.id;
  try {
    const transaction = await createTransactionQuery(
      user_id,
      amount,
      transType,
      category,
      description,
      transDate
    );
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

export const getTransactions = async (req, res) => {
  const user_id = req.user.id;
  try {
    const transactions = await getTransactionsQuery(user_id);
    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

export const getSummaryInfo = async (req, res) => {
  const user_id = req.user.id;
  try {
    const incomeTotal = await getTotalAmount(user_id, "income");
    const expenseTotal = await getTotalAmount(user_id, "expense");
    const balance = incomeTotal - expenseTotal;
    res.status(200).json({
      incomeTotal: incomeTotal,
      expenseTotal: expenseTotal,
      balance: balance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch summary info" });
  }
};
