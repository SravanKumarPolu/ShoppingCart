import Chart from "../charts/Chart";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Home() {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  const cartChart = (
    <LineChart width={359} height={280} data={cartItems}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
    </LineChart>
  );

  return (
    <>
      <h1 className="text-warning">Home</h1>
      <div
        style={{ background: "linear-gradient( to right,palegreen, orange )" }}
      >
        <Chart />
      </div>
      <div
        className="ms-auto "
        style={{
          background: "linear-gradient( to right,palegreen, pink )",
          border: "1.5px solid gold",
        }}
      >
        <div className="ms-auto fw-bold fs-5">{cartChart}</div>
      </div>
    </>
  );
}
