import { Children } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";

import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header
          closeButton
          className="position-absolute end-0"
        ></Offcanvas.Header>
        <Offcanvas.Title>
          <div className="d-flex flex-row ">
            <div className="d-flex justify-content-between ">
              {" "}
              Cart:
              <div>
                {cartQuantity}
                <div>
                  {cartQuantity === 0 && (
                    <h6 className="text-danger text-aglign-center">
                      No items,Please Add items
                    </h6>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Offcanvas.Body>
            <Stack gap={2}>
              {cartItems.map((item) => (
                <CartItem name={""} price={0} key={item.id} {...item} />
              ))}
            </Stack>
          </Offcanvas.Body>
        </Offcanvas.Title>
      </Offcanvas>
    </>
  );
}
