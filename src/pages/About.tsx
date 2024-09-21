import { useState } from "react";

import { BarChart, Bar, XAxis, YAxis } from "recharts";

import storeItems from "../data/items.json";
import { CartItem } from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
        <h1 className=" p-2">Note:-</h1>
        <h2 className=" px-4 m-4">
          Developed using React,TypeScript, BootStrap CSS,this project involved
          recreating Ecommerce landing page with a focus on responsive design
          and modern web practices
        </h2>
        <h2 className=" p-2"> User-Friendly Interface:</h2>
        <p className="px-4">
          Clean and intuitive design that provides a smooth shopping experience
          for users.
        </p>
        <h2 className=" p-2">Product Management:</h2>
        <p className="px-4">
          Easy-to-use product management system for adding, updating, and
          removing products.
        </p>{" "}
        <h3 className=" p-2">Customizable:</h3>{" "}
        <p className="px-4">
          Built with flexibility in mind, allowing for easy customization to
          match your brand's identity
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary"
            onClick={openCart}
            style={{ margin: "10px" }}>
            Open Cart
          </button>

          <button
            className="btn btn-secondary"
            onClick={closeCart}
            style={{ margin: "10px" }}>
            Close Cart
          </button>
          <button className="btn btn-primary" style={{ margin: "10px" }}>
            <Nav.Link to="/store" as={NavLink}>
              Open Store
            </Nav.Link>
          </button>
        </div>
      </div>
    </>
  );
}
