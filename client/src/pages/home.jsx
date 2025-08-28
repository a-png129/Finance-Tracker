import React, { useState, useEffect } from "react";
import axios from "axios";

import ExpensePieChart from "../components/expensePieChart";

const Home = () => {
  const [summaryInfo, setSummaryInfo] = useState({
    incomeTotal: 0,
    expenseTotal: 0,
    balance: 0,
  });

  const fetchSummaryInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/transaction/summary"
      );
      // console.log(res.data);
      setSummaryInfo(res.data);
    } catch (err) {
      console.error("Error fetching summary info:", err);
    }
  };

  // needs to be triggered after every new transaction added...
  useEffect(() => {
    fetchSummaryInfo();
  }, []);

  return (
    <div>
      Home
      <div className="flex justify-between">
        {/* card */}
        <div>Income: ${summaryInfo.incomeTotal}</div>
        <div>Expense: ${summaryInfo.expenseTotal}</div>
        <div>Balance: ${summaryInfo.balance}</div>
      </div>
      <ExpensePieChart />
    </div>
  );
};

export default Home;
