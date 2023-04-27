import { useState } from "react";

import { BarChart, Bar, XAxis, YAxis } from "recharts";

import storeItems from "../data/items.json";
import { CartItem } from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
export function About() {
  const { closeCart, cartItems } = useShoppingCart();
  const { openCart, cartQuantity } = useShoppingCart();
  const cartChart = (
    <BarChart width={359} height={280} data={cartItems}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" />
    </BarChart>
  );
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
    console.log(`count=${count}`);
  };
  const onDecrement = () => {
    setCount(count - 1);
    console.log(`count=${count}`);
  };
  return (
    <>
      <div
        className="ms-auto "
        style={{
          background: "linear-gradient( to right,palegreen, pink )",
          border: "1.5px solid gold",
        }}
      >
        <div className="d-flex flex-row  ">
          <button onClick={onIncrement} className="  btn btn-primary  p-2 m-4 ">
            Increment
          </button>
          <h2> count:{count}</h2>
          <button onClick={onDecrement} className="btn  btn-danger p-1 m-4">
            Dcrement{" "}
          </button>
        </div>

        <div className="ms-auto fw-bold fs-5">{cartChart}</div>
      </div>
    </>
  );
}
