import { Link, useNavigate } from "react-router-dom";

function CartTotal({ price }) {
  const navigate = useNavigate();
  const platformFee = (price * 0.05).toFixed(2);
  const gst = (price * 0.18).toFixed(2);
  const couponDiscount = 0.0;
  const totalPayable = (
    parseFloat(price) +
    parseFloat(platformFee) +
    parseFloat(gst) -
    couponDiscount
  ).toFixed(2);

  const onCheckout = () => {
    navigate("/cart/payment", { state: { price: totalPayable } });
  };
  return (
    <div
      className="card shadow-xl"
      style={{ height: 600, width: 350, borderRadius: 20 }}
    >
      <h5
        className="card-header text-center"
        style={{
          fontSize: 24,
          backgroundColor: "orange",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        Order Details
      </h5>
      <div className="card-body">
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-start  card-text">
            <p>Service Total</p>
          </div>
          <div className="col-6 d-flex justify-content-end card-text">
            {price}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-start card-text">
            <p>Platform Fee</p>
          </div>
          <div className="col-6 d-flex justify-content-end card-text">
            {platformFee}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-start card-text">
            <p>GST</p>
          </div>
          <div className="col-6 d-flex justify-content-end  card-text">
            {gst}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6 d-flex justify-content-start  card-text">
            <p>Coupon Discount</p>
          </div>
          <div className="col-6 d-flex justify-content-end  card-text">
            {couponDiscount}
          </div>
        </div>
        <div className="row mt-2">
          <hr />
        </div>
        <div className="row mt-2">
          <div
            className="col-6 d-flex justify-content-start card-text"
            style={{ fontWeight: "bold" }}
          >
            Total Payable
          </div>
          <div className="col-6 d-flex justify-content-end card-text">
            {totalPayable}
          </div>
        </div>
        <div className="row mt-4">
          <hr />
        </div>
        <div className="row mt-2 d-flex justify-content-center">
          <div class="input-group mb-3"></div>
        </div>
        <div className="row mt-2 d-flex justify-content-center">
          <button
            onClick={onCheckout}
            className="btn btn-success"
            style={{ height: 50, width: 150, borderRadius: 10 }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartTotal;
