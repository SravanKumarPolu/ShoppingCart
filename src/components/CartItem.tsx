import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

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
      className="d-flex justify-content-between"
    >
      <img src={item.imgUrl} style={{ width: "64px", height: "65px" }}></img>
      <div>{item.name}</div>
      <div>{item.price}</div>
    </Stack>
  );
}
