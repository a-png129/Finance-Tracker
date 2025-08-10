import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/transaction");
      // idk why the proxy in package.json doesn't work...
      // if proxy works then i'd be able to just write "/api/transaction"
      console.log(res.data);
      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transaction Activity</h1>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              {t.type} | ${t.amount} | {t.transactiondate} | {t.category} |{" "}
              {t.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transactions;
