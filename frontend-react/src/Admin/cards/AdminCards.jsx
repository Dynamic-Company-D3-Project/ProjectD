import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";

const AdminCard = ({ title, count, backcolor }) => {
  return (
    <div
      className="card text-center m-3"
      style={{
        backgroundColor: backcolor,
        boxShadow: `0 4px 8px 0 ${backcolor}, 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      }}
    >
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <br />
        <span
          className="card-text fw-bold fs-4 text-bg-dark"
          style={{ backgroundColor: backcolor }}
        >
          {count}
        </span>
      </div>
    </div>
  );
};

export default AdminCard;
