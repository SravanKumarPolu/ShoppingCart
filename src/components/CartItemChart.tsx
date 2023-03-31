import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useShoppingCart } from "../context/ShoppingCartContextChart";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { Children } from "react";

type CartItemChartProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export function CartItemChart({
  id,
  quantity,
  name,
  price,
}: CartItemChartProps): JSX.Element {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);

  return (
    <>
      {quantity}
      <BarChart width={259} height={180} data={[item]}>
        <XAxis dataKey={name} />
        <YAxis />
        <Bar dataKey={price} fill="#8884d8" />
      </BarChart>
    </>
  );
}
