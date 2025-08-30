import React from "react";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const ExpensePieChart = (props) => {
  // Example data
  // const data = [
  //   { categorytitle: "Rent", total: "100.00", categorycolour: "#ED694E" },
  //   { categorytitle: "Food", total: "52.43", categorycolour: "#EDC04E" },
  // ];

  const data = props.data.map((d) => ({
    ...d,
    total: parseFloat(d.total), // convert string -> number
  }));

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">Expenses By Category</h2>
      <div className="w-9/12 h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              outerRadius={120}
              innerRadius={60}
              startAngle={90}
              endAngle={450}
              dataKey="total" // numeric value
              nameKey="categorytitle"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.categorycolour} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
