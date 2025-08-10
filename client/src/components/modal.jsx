import React, { useState } from "react";
import axios from "axios";

const Modal = (props) => {
  // const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/transaction", {
        amount: 1,
        transType: "income",
        category: "rent",
        description: "test post",
        transDate: "2025-08-09 22:32:00",
      });

      // idk how to close modal and refresh page
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
          <input type="date" className="w-full border p-2 rounded" />
          <input
            type="text"
            placeholder="Category"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full border p-2 rounded"
          />
          <select className="w-full border p-2 rounded">
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="number"
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
