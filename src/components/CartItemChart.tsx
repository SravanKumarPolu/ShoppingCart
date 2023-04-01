import { Button, Stack } from "react-bootstrap";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCartChart } from "../context/ShoppingCartContextChart";

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
}: CartItemChartProps) {
  const { removeFromCart } = useShoppingCartChart();

  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <>
      <Stack>
        <h2>
          {quantity > 1 && (
            <span className="text-muted p-1 " style={{ fontSize: "15px" }}>
              x{quantity}
            </span>
          )}
        </h2>

        <BarChart width={259} height={180} data={[item]}>
          <XAxis dataKey={name} />
          <YAxis />
          <Bar dataKey={price} fill="#8884d8" />
        </BarChart>
      </Stack>
    </>
  );
}
