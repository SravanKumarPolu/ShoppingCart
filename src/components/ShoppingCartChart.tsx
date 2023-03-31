import { Children } from "react";

import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../context/ShoppingCartContextChart";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItemChart } from "./CartItemChart";

type ShoppingCartChartProps = {
  isOpen: boolean;
};
export function ShoppingCartChart({
  isOpen,
}: ShoppingCartChartProps): JSX.Element {
  const { closeCart, cartItemCharts } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      {cartItemCharts.map((item) => (
        <CartItemChart name={""} price={0} key={item.id} {...item} />
      ))}
    </>
  );
}
