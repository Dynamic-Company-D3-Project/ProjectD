import { useEffect, useState } from "react";
import NavbarVertical from "../components/NavbarVertical";
import CartCard from "../cards/CartCard";
import CartTotal from "../components/CartTotal";
import NavBarUser from "../components/NavBarUser";
import Footer from "../components/Footer";
import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);
  useEffect(() => {
    const price = cartItems.reduce((acc, cart) => acc + Number(cart.price), 0);
    setTotalPrice(price);
  }, [cartItems]); // This only runs when cartItems changes
  const token = sessionStorage.getItem("authToken");
  const loadCart = async () => {
    axios
      .get(`${SPRING_URL}/cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response["data"]);
      })
      .catch((error) => {
        toast.error("error fetching data");
      });
  };

  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container container-fluid">
        <div className="row">
          <div className="col-2">
            <NavbarVertical />
          </div>
          <div className="col-10">
            <div className="categoryHeader page-header fw-bold text-3xl">
              <h2>My Cart</h2>
            </div>
            <div className="row mt-3">
              <div className="col-7">
                {cartItems.map((service) => {
                  return (
                    <div className="row d-flex justify-content-center mt-3">
                      <CartCard
                        loadCart={loadCart}
                        serviceId={service["id"]}
                        serviceName={service["name"]}
                        serviceDescription={service["description"]}
                        servicePrice={service["price"]}
                        serviceImage={service["image"]}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="col-5 d-flex justify-content-center">
                <div className="mt-4">
                  <CartTotal price={totalPrice} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}
export default Cart;
