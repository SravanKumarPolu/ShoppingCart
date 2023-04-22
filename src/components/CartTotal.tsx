import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { CartItem } from "./CartItem";
import { ShoppingCart } from "./ShoppingCart";

type CartTotalProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
};
export default function CartTotal({
  id,
  name,
  price,
  quantity,
  total,
}: CartTotalProps) {
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <div>
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        Total: {formatCurrency((total += item.price * quantity))}
      </div>
    </div>
  );
}
