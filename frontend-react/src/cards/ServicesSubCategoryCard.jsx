import React from "react";
import { Link } from "react-router-dom";
const SubCategory = ({ text, price,id }) => {
  return (
    <div className="col-md-3 m-3" style={{ width: "250px", height: "250px" }}>
      <div className="card-sl">
        <div className="card-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661594651848-0f08f9abe17d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={text}
          />
        </div>
        <div className="card-heading">{text}</div>
        <div className="card-text fw-bold fs-5">&#x20B9; {price}</div>
        <Link to={`/payment/${id}`} className="card-button" style={{ textDecoration: "none" }}>
          {" "}
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default SubCategory;
