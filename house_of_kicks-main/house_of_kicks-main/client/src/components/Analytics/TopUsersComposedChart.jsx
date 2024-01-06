
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Label } from 'recharts';

const TopUsersComposedChart = ({ data }) => {
  return (
    <ComposedChart width={400} height={300} data={data}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="username" />
      <YAxis yAxisId="left">
        <Label value="Number of Orders" angle={-90} position="centerTop" offset={10} />
      </YAxis>
      <YAxis yAxisId="right" orientation="right">
        <Label value="Total Profit" angle={-90} position="insideRight" offset={10} />
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="orders" barSize={20} fill="#413ea0" yAxisId="left" />
      <Line dataKey="totalProfit" stroke="#ff7300" yAxisId="right" />
    </ComposedChart>
  );
};

export default TopUsersComposedChart;

