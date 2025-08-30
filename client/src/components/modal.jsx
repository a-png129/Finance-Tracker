import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = (props) => {
  const [formData, setFormData] = useState({
    amount: "",
    category_id: "",
    description: "",
    transDate: new Date().toLocaleDateString("en-CA"), // curr date
  });
  const [transType, setTransType] = useState("Expense");
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const categories =
    transType === "Income" ? incomeCategories : expenseCategories;

  // this should go in services folder
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/transaction/categories"
      );
      setIncomeCategories(res.data.incomeCategories);
      setExpenseCategories(res.data.expenseCategories);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []); // dependency array tells React when to re-run effect

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleTransType(event) {
    setTransType(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/transaction",
        formData
      );
      props.handleCancel();
      if (props.refreshTransactions) props.refreshTransactions();
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <h2>New Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="transType"
            value={transType}
            onChange={handleTransType}
            className="w-full border p-2 rounded"
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((c) => {
              // dynamically load category options based on transType
              return (
                <option key={c.id} value={c.id}>
                  {c.categorytitle}
                </option>
              );
            })}
          </select>
          <input
            name="description"
            value={formData.description}
            type="text"
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded"
          />
          <input
            name="transDate"
            value={formData.transDate}
            type="date"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="amount"
            value={formData.amount}
            type="number"
            onChange={handleChange}
            placeholder="Amount"
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={props.handleCancel}
              type="button"
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
