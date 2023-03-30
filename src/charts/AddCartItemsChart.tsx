import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type AddCartItemsChartProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function AddCartItemsChart({
  id,
  name,
  price,
}: AddCartItemsChartProps) {
  const item = storeItems.find((i) => i.id === id);
  return (
    <BarChart width={359} height={280} data={[item]}>
      <XAxis dataKey={name} />
      <YAxis />
      <Bar dataKey={price} fill="#8884d8" />
    </BarChart>
  );
}
