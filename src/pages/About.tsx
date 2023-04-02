import Chart from "../charts/Chart";
import { CartItemChart } from "../components/CartItemChart";

export function About() {
  return (
    <>
      <Chart />

      <CartItemChart name={""} price={0} key={item.id} {...item} />
    </>
  );
}
