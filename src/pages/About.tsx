import AddCartItemsChart from "../charts/AddCartItemsChart";
import Chart from "../charts/Chart";
import { useShoppingCart } from "../context/ShoppingCartContext";

import { Children } from "react";
import { Offcanvas, Stack } from "react-bootstrap";

import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};
export function About() {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <Chart />

      {cartItems.map((item) => (
        <AddCartItemsChart
          imgUrl={""}
          name={""}
          price={0}
          key={item.id}
          {...item}
        />
      ))}
    </>
  );
}
