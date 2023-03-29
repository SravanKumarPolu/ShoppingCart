import { CartItem } from "./CartItem";

export function chart() {
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem name={""} price={0} key={item.id} {...item} />
      ))}
    </div>
  );
}
