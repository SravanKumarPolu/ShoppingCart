import Chart from "../charts/Chart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import iphone from "../assets/IPhone.png";
import car from "../assets/TATACar.png";
import fruits from "../assets/Fruits.png";
import computer from "../assets/Computer.png";
export function Home() {
  const { closeCart, cartItems, openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, palegreen, orange)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}>
        <span className=" p-2">
          <h1 className="text-black p-4">Welcome to Our Shop!</h1>
          <p>Find the best products at unbeatable prices!</p>
        </span>
        <div className="row">
          <div className="col-md-6">
            <img
              src={car}
              alt="TATA Car"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={iphone}
              alt="IPhone"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={fruits}
              alt="Fruits"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
          </div>
          <div className="col-md-6">
            <img
              src={computer}
              alt="Computer"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={openCart}
          style={{ margin: "10px" }}>
          Start Shopping
        </button>
        <button
          className="btn btn-secondary"
          onClick={closeCart}
          style={{ margin: "10px" }}>
          Close Cart
        </button>
      </div>
    </>
  );
}
