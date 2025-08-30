import React from "react";
import { Pie, PieChart, Cell, Tooltip, Legend } from "recharts";

const ExpensePieChart = (props) => {
  // Example data
  // const data = [
  //   { categorytitle: "Food", total: "52.43", categorycolour: "#EDC04E" },
  //   { categorytitle: "Rent", total: "100.00", categorycolour: "#ED694E" },
  // ];

  const data = props.data.map(d => ({
    ...d,
    total: parseFloat(d.total), // convert string -> number
  }));

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
      <PieChart width={400} height={400}>
        <Pie
          data = {data}
          outerRadius = {120}
          innerRadius = {60}
          dataKey = "total" // numeric value
          nameKey = "categorytitle"
          label = {({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.categorycolour} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpensePieChart;
