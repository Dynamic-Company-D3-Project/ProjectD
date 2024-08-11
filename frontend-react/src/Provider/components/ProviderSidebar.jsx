import { Link } from "react-router-dom";
import "../../App.css";

function ProviderSidebar() {
  function onLogout() {
    sessionStorage.clear();
  }
  return (
    <div>
      <nav className="navbar bg-light">
        <ul className="nav navbar-nav mx-auto">
          <br />
          <li className="nav-item text-center ">
            <h5 style={{ fontWeight: "bold", fontSize: 25 }}>
              Hello , {sessionStorage.getItem("name")}
            </h5>
          </li>
          <br />
          <br />
          <li className="nav-item text-center">
            <Link to="/provider/dashboard">Dashboard</Link>
          </li>
          <br />
          <br />
          <li className="nav-item text-center">
            <Link to="/provider/pending_orders">Pending Orders</Link>
          </li>
          <br />
          <br />
          <li className="nav-item text-center ">
            <Link to="/provider/orders">All Orders</Link>
          </li>
          <br />
          <br />
          <li className="nav-item text-center">
            <Link to="/provider/detail">Details</Link>
          </li>
          <br />
          <br />
          <li className="nav-item text-center">
            <Link onClick={onLogout} to={"/provider/login"}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProviderSidebar;
