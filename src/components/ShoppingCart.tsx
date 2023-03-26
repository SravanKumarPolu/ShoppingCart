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
      <Offcanvas.Header
        closeButton
        className="position-absolute end-0"
      ></Offcanvas.Header>
      <Offcanvas.Title>
        <div className="d-flex flex-row">
          <div className="d-flex justify-content-between ">
            {" "}
            Cart:
            <span className=" fs-2 text-info position-absolute  end-50 ">
              {cartQuantity}
            </span>
          </div>
        </div>
        <Offcanvas.Body>
          <Stack gap={2}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas.Title>
    </Offcanvas>
  );
}
