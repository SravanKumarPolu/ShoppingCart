import { Children } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContext";
import { ShoppingCartChart } from "../components/ShoppingCartChart";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { useShoppingCartChart } from "../context/ShoppingCartContextChart";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  const { openCartChart, cartQuantitys } = useShoppingCartChart();

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
            <div>{cartQuantity}</div>
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
  );
}
