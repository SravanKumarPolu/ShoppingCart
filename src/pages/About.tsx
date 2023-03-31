import Chart from "../charts/Chart";
import { CartItemChart } from "../components/CartItemChart";
import { ShoppingCartChart } from "../components/ShoppingCartChart";
import { Children } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import {
  useShoppingCart,
  ShoppingCartContextChart,
} from "../context/ShoppingCartContextChart";

export function About() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <Chart />
      {cartQuantity > 0 && <div>about{cartQuantity}</div>}
    </>
  );
}
