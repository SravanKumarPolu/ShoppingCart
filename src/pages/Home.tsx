import { useShoppingCart } from "../context/ShoppingCartContext";
import iphone from "../assets/IPhone.png";
import car from "../assets/TATACar.png";
import fruits from "../assets/Fruits.png";
import computer from "../assets/Computer.png";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/esm/Nav";
export function Home() {
  const { closeCart, openCart } = useShoppingCart();

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, palegreen, orange)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}>
        <span className="p-2">
          <h1 className="text-black p-4">Welcome to Buy Me</h1>
          <p>Find the best products at unbeatable prices!</p>
        </span>
        <div className="row wrap">
          <a
            className="carousel-control-prev "
            href="#imageCarousel"
            role="button"
            data-slide="prev">
            <span
              style={{
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "20px",

                height: "100px",
              }}
              className="carousel-control-prev-icon bg-primary p-4"
              aria-hidden="true"></span>
            <span className="sr-only ">Previous</span>
          </a>
          <div
            id="imageCarousel"
            className="carousel slide row"
            data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={car}
                  alt="TATA Car"
                  className="d-block w-100"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={iphone}
                  alt="IPhone"
                  className="d-block w-100"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={fruits}
                  alt="Fruits"
                  className="d-block w-100"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={computer}
                  alt="Computer"
                  className="d-block w-100"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>
            </div>
          </div>
          <a
            className="carousel-control-next "
            href="#imageCarousel"
            role="button"
            data-slide="next">
            <span
              style={{
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "20px",

                height: "100px",
              }}
              className="carousel-control-next-icon bg-primary p-4"
              aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <button
          className="btn btn-primary"
          onClick={openCart}
          style={{ margin: "10px" }}>
          Open Cart
        </button>
        <button className="btn btn-primary">
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
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
