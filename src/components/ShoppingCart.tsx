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
            <div className="d-flex justify-content-between align-item-center">
              {" "}
              Cart:
              <div>
                {cartQuantity > 0 && <div>{cartQuantity}</div>}
                <div>
                  {cartQuantity === 0 && (
                    <h5 className="d-flex text-warning p-2 ms-4">
                      <span>
                        {" "}
                        <strong>Your cart is empty.</strong>
                      </span>
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Offcanvas.Body>
            {cartQuantity === 0 && (
              <h6 className="d-flex  text-success  p-2 ms-4">
                <span>
                  <small>
                    <p>"Please visit 'Store' page to add items."</p>
                  </small>
                </span>
              </h6>
            )}
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
