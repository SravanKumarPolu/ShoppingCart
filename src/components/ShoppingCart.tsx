import { Children } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";

import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <div className="d-flex justify-content-between align-item-center">
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
          <Offcanvas.Header
            closeButton
            className="position-absolute end-0"></Offcanvas.Header>
          <Offcanvas.Title>
            <div className="d-flex flex-row ">
              <div className="d-flex justify-content-between align-item-center">
                <div>
                  {cartQuantity > 0 && (
                    <div className="d-flex  mt-3 ">
                      <h5 className="d-flex   ms-4"> Cart:</h5>

                      <div className="d-flex text-warning  me-5 ms-5 ps-5">
                        <strong>
                          <h4>{cartQuantity}</h4>
                        </strong>
                      </div>
                    </div>
                  )}
                  <div>
                    {cartQuantity === 0 && (
                      <h5 className="d-flex text-warning ps-5 ms-5 mt-4">
                        <strong>Your cart is empty.</strong>
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
                <div className="ms-auto fw-bold fs-5">
                  Total
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const item = storeItems.find((i) => i.id === cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                  )}
                </div>
                <div
                  className="ms-auto fw-bold fs-5"
                  style={{
                    background: "linear-gradient( to right,palegreen, pink )",
                    border: "1.5px solid gold",
                  }}></div>
              </Stack>
            </Offcanvas.Body>
          </Offcanvas.Title>
        </Offcanvas>
      </div>
    </>
  );
}
