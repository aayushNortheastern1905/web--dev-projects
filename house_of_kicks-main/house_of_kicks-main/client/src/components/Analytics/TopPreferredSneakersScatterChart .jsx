import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const TopPreferredSneakersScatterChart = ({ data }) => {
  return (
    <ScatterChart
      width={600}
      height={400}
    //   margin={{
    //     top: 20,
    //     right: 20,
    //     bottom: 20,
    //     left: 20,
    //   }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="comfort" name="Comfort" />
      <YAxis type="number" dataKey="durability" name="Durability" />
      <ZAxis type="number" dataKey="popularity" range={[50, 300]} name="Popularity" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      {data.map((sneaker, index) => (
        <Scatter
          key={`sneaker-${index}`}
          name={sneaker.sneaker}
          data={[sneaker]}
          fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
        />
      ))}
    </ScatterChart>
  );
};

export default TopPreferredSneakersScatterChart;