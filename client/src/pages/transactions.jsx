import React, { useEffect, useState } from "react";
import axios from "axios";

import Modal from "../components/modal";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // this should go in services folder
  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/transaction");
      // idk why the proxy in package.json doesn't work...
      // if proxy works then i'd be able to just write "/api/transaction"
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
        <PageTitle title="Transactions"/>
        <Button onClick={handleOpenModal} label="New Transaction"/>
      </div>
      {transactions.length === 0 ? (
        <p>No transactions history.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
                  <td>{new Date(t.transdate).toLocaleDateString()}</td>
                  <td>{t.categorytitle}</td>
                  <td>{t.description}</td>
                  <td>{t.transtype}</td>
                  <td>$ {t.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {isModalOpen && <Modal handleCancel={handleCloseModal} refreshTransactions={fetchTransactions}/>}
    </div>
  );
};

export default Transactions;
