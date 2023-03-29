import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 8 },
  { name: "Apr", value: 20 },
  { name: "May", value: 12 },
];

const Chart = () => (
  <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChart>
);

export default Chart;
