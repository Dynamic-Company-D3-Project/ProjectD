import { useState } from "react";
import NavbarVertical from "../components/NavbarVertical";
import CartData from "../dummy/CartData.json";
import CartCard from "../cards/CartCard";
import CartTotal from "../components/CartTotal";
import NavBarUser from "../components/NavBarUser";
import Footer from "../components/Footer";

function Cart() {
  const [services, setService] = useState(CartData);
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
                {services.map((service) => {
                  return (
                    <div className="row d-flex justify-content-center mt-3">
                      <CartCard
                        serviceName={service["serviceName"]}
                        serviceDescription={service["serviceDescription"]}
                        servicePrice={service["servicePrice"]}
                        serviceImage={service["serviceImage"]}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="col-5 d-flex justify-content-center">
                <div className="mt-4">
                  <CartTotal />
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
