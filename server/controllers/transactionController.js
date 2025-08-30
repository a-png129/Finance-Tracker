import {
  createTransactionQuery,
  getTransactionsQuery,
  getTotalAmount,
  getCategoriesQuery,
  getAmountPerCategory,
} from "../models/transactionModel.js";

export const createTransaction = async (req, res) => {
  const { amount, category_id, description, transDate } = req.body;
  const user_id = req.user.id;
  try {
    const transaction = await createTransactionQuery(
      user_id,
      amount,
      category_id,
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
    const incomeTotal = await getTotalAmount(user_id, "Income");
    const expenseTotal = await getTotalAmount(user_id, "Expense");
    const balance = incomeTotal - expenseTotal;
    // const amountPerIncomeCategory = await getAmountPerCategory(user_id, "Income");
    const amountPerExpenseCategory = await getAmountPerCategory(user_id, "Expense");
    res.status(200).json({
      incomeTotal: incomeTotal,
      expenseTotal: expenseTotal,
      balance: balance,
      amountPerExpenseCategory: amountPerExpenseCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch summary info" });
  }
};

export const getCategories = async (req, res) => {
  const user_id = req.user.id;
  try {
    const incomeCategories = await getCategoriesQuery(user_id, "Income");
    const expenseCategories = await getCategoriesQuery(user_id, "Expense");
    res.status(200).json({
      incomeCategories: incomeCategories,
      expenseCategories: expenseCategories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}