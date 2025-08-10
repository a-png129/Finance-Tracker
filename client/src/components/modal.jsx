import React, { useState } from "react";
import axios from "axios";

const Modal = (props) => {
  const [formData, setFormData] = useState({
    amount: 0,
    transType: "",
    category: "",
    description: "",
    transDate: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/transaction",
        formData
      );

      // idk how to close modal and refresh transaction list
      props.handleCancel();
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
            value={formData.transType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            name="transDate"
            value={formData.transDate}
            type="date"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="category"
            value={formData.category}
            type="text"
            onChange={handleChange}
            placeholder="Category"
            className="w-full border p-2 rounded"
          />
          <input
            name="description"
            value={formData.description}
            type="text"
            onChange={handleChange}
            placeholder="Description"
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
