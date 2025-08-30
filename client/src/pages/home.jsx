import React, { useState, useEffect } from "react";
import axios from "axios";

import ExpensePieChart from "../components/expensePieChart";
import SummaryCard from "../components/summaryCard";
import PageTitle from "../components/PageTitle";
import "../components/ChartCard.css"

const Home = () => {
  const [summaryInfo, setSummaryInfo] = useState({
    incomeTotal: "",
    expenseTotal: "",
    balance: "",
    amountPerExpenseCategory: [],
  });

  // this should go in services folder
  const fetchSummaryInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/transaction/summary"
      );
      setSummaryInfo(res.data);
    } catch (err) {
      console.error("Error fetching summary info:", err);
    }
  };

  useEffect(() => {
    fetchSummaryInfo();
  }, []);

  return (
    <div>
      <PageTitle title="Home"/>
      <div className="flex justify-between gap-10">
        <SummaryCard amount={summaryInfo.incomeTotal} title="Income" textColour="text-green-600" />
        <SummaryCard amount={summaryInfo.expenseTotal} title="Expense" textColour="text-pink-600" />
        <SummaryCard amount={summaryInfo.balance} title="Balance" textColour="text-blue-600"/>
      </div>
      <div className="chart-card">
        <ExpensePieChart data={summaryInfo.amountPerExpenseCategory} />
      </div>
    </div>
  );
};

export default Home;
