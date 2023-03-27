import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  name: string;
  quantity: number;
};

export function CartItem({ id, quantity, name }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex justify-content-between"
    >
      <img src={item.imgUrl} style={{ width: "64px", height: "65px" }}></img>
      <div>{item.name}</div>
    </Stack>
  );
}
