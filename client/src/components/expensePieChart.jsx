import React from "react";
import { Pie, PieChart, Cell, Tooltip, Legend } from "recharts";

const ExpensePieChart = () => {
  // Example expenses
  const data = [
    { name: "Rent", value: 1200 },
    { name: "Groceries", value: 350 },
    { name: "Transportation", value: 150 },
    { name: "Entertainment", value: 200 },
    { name: "Misc", value: 100 },
  ];

  // Example colours
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          innerRadius={60}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpensePieChart;
