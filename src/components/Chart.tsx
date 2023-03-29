import { Bar, BarChart, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "raj",
    value: 10,
  },
  {
    name: "madhu",
    value: 30,
  },
  {
    name: "venky",
    value: 60,
  },
  {
    name: "kumar",
    value: 29,
  },
];
type Data = {
  name: "string";
  value: number;
};
export default function Chart() {
  return (
    <BarChart width={359} height={280} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}
