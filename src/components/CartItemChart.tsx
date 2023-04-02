import { Button, Stack } from "react-bootstrap";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

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
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  console.log(item.name);
  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center justify-content-between"
      >
        <div className="me-atuod-flex align-items-center ">
          <div>
            {item.name}
            {quantity > 1 && (
              <span className="text-muted p-1 " style={{ fontSize: "15px" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="s-2 text-muted" style={{ fontSize: "10px" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div className="s-2 text-muted">
          {formatCurrency(item.price * quantity)}
        </div>
      </Stack>
      <BarChart width={259} height={180} data={[item]}>
        <XAxis dataKey={quantity} />
        <YAxis />
        <Bar dataKey={price} fill="#8884d8" />
      </BarChart>
    </>
  );
}
