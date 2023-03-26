import { Children } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {" "}
          Cart
          <Offcanvas.Body className="text-info">
            {cartQuantity}
            <Stack gap={2}>{cartItems}</Stack>
          </Offcanvas.Body>
        </Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
