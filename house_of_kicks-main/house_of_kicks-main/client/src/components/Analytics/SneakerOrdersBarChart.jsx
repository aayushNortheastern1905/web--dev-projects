import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';

const SneakerOrdersBarChart = ({ data }) => {
  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sneaker" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="orders" fill="#8884d8" />
    </BarChart>
  );
};

export default SneakerOrdersBarChart