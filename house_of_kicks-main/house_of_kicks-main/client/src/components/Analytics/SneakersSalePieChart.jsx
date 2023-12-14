import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const SneakerSalesPieChart = ({ data }) => {
  // Preprocess data to remove '%' sign and convert salesPercentage to numbers
  const processedData = data.map(sneaker => ({
    name: sneaker.name,
    salesPercentage: parseFloat(sneaker.salesPercentage.replace('%', '')),
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; // Define colors for different sneakers

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={processedData}
        dataKey="salesPercentage"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {processedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};



export default SneakerSalesPieChart;
