import React, { useEffect, useState } from "react";
import axios from "axios";

import Modal from "../components/modal";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // this should go in services folder
  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/transaction");
      // idk why the proxy in package.json doesn't work...
      // if proxy works then i'd be able to just write "/api/transaction"
      // console.log(res.data);
      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <div className="w-full flex justify-between">
        <h1>Transaction Activity</h1>
        <button onClick={handleOpenModal} className="p-2 mb-8 bg-blue-500 hover:bg-blue-600 text-white flex justify-center rounded">
          New Transaction
        </button>
      </div>
      {transactions.length === 0 ? (
        <p>No transactions history.</p>
      ) : (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((t) => {
              return (
                <tr key={t.id} className="hover:bg-gray-300 transition-colors">
                  <td>{t.transdate}</td>
                  <td>{t.category}</td>
                  <td>{t.description}</td>
                  <td>{t.transtype}</td>
                  <td>$ {t.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {isModalOpen && <Modal handleCancel={handleCloseModal}/>}
    </div>
  );
};

export default Transactions;
