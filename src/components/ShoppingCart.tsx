import { Children } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {" "}
          Cart
          <Offcanvas.Body className="text-info">
            {cartQuantity}
            <Stack gap={2}>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Offcanvas.Body>
        </Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
