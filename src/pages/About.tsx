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
        }}>
        <h2>
          Developed using React,TypeScript, Tailwind CSS,this project involved
          recreating Ecommerce landing page with a focus on responsive design
          and modern web practices
        </h2>

        <div className="ms-auto fw-bold fs-5">{cartChart}</div>
      </div>
    </>
  );
}
