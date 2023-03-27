import { Stack } from "react-bootstrap";
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
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center justify-content-between"
    >
      <img
        src={item.imgUrl}
        style={{ width: "64px", height: "65px", objectFit: "cover" }}
      ></img>

      <div className="me-atuo">
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
      <div className="s-2 text-muted" style={{ fontSize: "10px" }}>
        {formatCurrency(item.price * quantity)}
      </div>
    </Stack>
  );
}
