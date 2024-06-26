import React from "react";
import { Nav } from "react-bootstrap";

const ProviderSidebar = () => {
  return (
    <div
      className="Nav flex-column p-3 vh-100"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
    >
      <a href="/home" className="nav-link">
        Dashboard
      </a>
      <a href="/orders" className="nav-link">
        Orders
      </a>
      <a href="/providers" className="nav-link">
        Providers
      </a>
      <a href="/settings" className="nav-link">
        Settings
      </a>
    </div>
  );
};

export default ProviderSidebar;
