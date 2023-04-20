import { Button, Stack } from "react-bootstrap";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export function CartItem({ id, quantity, name, price }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

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
        <img
          src={item.imgUrl}
          style={{ width: "44px", height: "45px", objectFit: "cover" }}
        ></img>

        <div className="me-atuod-flex align-items-center ">
          <div style={{ fontSize: "12px" }}>
            {item.name}
            {quantity > 1 && (
              <span className="text-muted p-1 " style={{ fontSize: "10px" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="s-2 text-muted" style={{ fontSize: "8px" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div className="s-2 text-muted" style={{ fontSize: "14px" }}>
          {formatCurrency(item.price * quantity)}
        </div>

        <div className="d-flex">
          <Button
            className="btn btn-outline-warning border border-warning rounded-circle m-1"
            size="sm"
            onClick={() => increaseCartQuantity(item.id)}
          >
            +
          </Button>
          <Button
            className="btn btn-outline-danger border  border-warning text-warning rounded-circle m-1"
            size="sm"
            onClick={() => decreaseCartQuantity(item.id)}
          >
            -
          </Button>
          <Button
            className="btn btn-outline-danger text-warning m-1"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            D
          </Button>
        </div>
      </Stack>
    </>
  );
}
