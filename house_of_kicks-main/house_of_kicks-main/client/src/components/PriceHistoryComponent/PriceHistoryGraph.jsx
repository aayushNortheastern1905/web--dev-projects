import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PriceHistoryGraph = ({ data }) => {
  return (
    <LineChart width={450} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        label={{
          value: 'Date',
          position: 'insideBottom',
          offset: -4, 
          style: { fontSize: '14px', fontWeight: 'bold', fill: '#333' } 
        }}
      />
      <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft' , style: { fontSize: '14px', fontWeight: 'bold', fill: '#333' } }}  />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#CF0A2C" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default PriceHistoryGraph;

