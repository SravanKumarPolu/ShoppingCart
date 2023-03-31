import Chart from "../charts/Chart";
import { CartItemChart } from "../components/CartItemChart";
import { ShoppingCartChart } from "../components/ShoppingCartChart";
import { Children } from "react";
import { formatCurrency } from "../utilities/formatCurrency";

export function About() {
  return (
    <>
      <Chart />
      <ShoppingCartChart isOpen={true} />
    </>
  );
}
