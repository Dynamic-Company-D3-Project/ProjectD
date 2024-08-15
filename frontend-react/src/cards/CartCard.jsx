import axios from "axios";
import { SPRING_URL } from "../services/Service";
import { toast } from "react-toastify";

function CartCard({
  loadCart,
  serviceId,
  serviceName,
  serviceDescription,
  servicePrice,
  serviceImage,
}) {
  const token = sessionStorage.getItem("authToken");
  const removeCartItem = async () => {
    axios
      .delete(`${SPRING_URL}/cart/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(`${serviceName} removed successfully`);
        loadCart();
      })
      .catch((error) => {
        toast.error("Please Try again later");
      });
  };
  return (
    <div className="card flex-row mt-3 shadow-xl" style={{ width: 700 }}>
      <div className="d-flex">
        <img
          alt="QuikEasy"
          src="/assets/SubCategory.jpg"
          className="card-img-left mt-2 mb-2"
          style={{ maxWidth: 150, borderRadius: 10 }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: 19, color: "blue" }}>
          {serviceName}
        </h5>
        <p className="card-text">{serviceDescription}</p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-danger btn-sm me-3"
            style={{ backgroundColor: "red" }}
            onClick={removeCartItem}
          >
            Remove
          </button>
          <button className="btn btn-success btn-sm" style={{ width: 60 }}>
            {"₹" + servicePrice}
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
