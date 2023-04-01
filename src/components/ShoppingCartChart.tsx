import { Children } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";

import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { useShoppingCartChart } from "../context/ShoppingCartContextChart";
import { CartItemChart } from "./CartItemChart";

type ShoppingCartChartProps = {
  isOpen: boolean;
};
export function ShoppingCartChart({ isOpen }: ShoppingCartChartProps) {
  const { closeCartChart, cartItems } = useShoppingCartChart();
  const { openCartChart, cartQuantitys } = useShoppingCartChart();

  return (
    <Offcanvas show={isOpen} onHide={closeCartChart} placement="end">
      <Offcanvas.Header
        closeButton
        className="position-absolute end-0"
      ></Offcanvas.Header>
      <Offcanvas.Title>
        <div className="d-flex flex-row">
          <div className="d-flex justify-content-between ">
            {" "}
            Cart:
            {cartQuantitys}
          </div>
        </div>
        <Offcanvas.Body>
          <Stack gap={2}>
            {cartItems.map((item) => (
              <CartItemChart name={""} price={0} key={item.id} {...item} />
            ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas.Title>
    </Offcanvas>
  );
}
