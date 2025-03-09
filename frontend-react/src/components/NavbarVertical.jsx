import { Link } from "react-router-dom";
import "../App.css";

function NavbarVertical() {
  const handleLogout = () => {
    sessionStorage.removeItem('authToken')
   // sessionStorage.removeItem('email')
  }
  const name = sessionStorage.getItem('userName')
  return (
    <div >
      <nav className="navbar bg-light">
        <ul className="nav navbar-nav mx-auto">
          <br />
          <li className="nav-item text-center mt-1">
            <img
              src="/logo512.png"
              alt="User"
              className="rounded-circle"
              width="135px"
            />
          </li>

          <li className="nav-item text-center ">
            <h5 className="fw-bold">Hello , {name}</h5>
          </li>

          <li className="nav-item text-center">
            <Link to="/">Home</Link>
          </li>
         
          <li className="nav-item text-center">
            <Link to="/account">Details</Link>
          </li>
         
          <li className="nav-item text-center ">
            <Link to="/cart">My Cart</Link>
          </li>
          
          <li className="nav-item text-center">
            <Link to="/bookings">My Bookings</Link>
          </li>
         
          <li className="nav-item text-center">
            <Link to="/address">Address</Link>
          </li>
         
          <li className="nav-item text-center">
            <Link to="/support">Support</Link>
          </li>
         
          <br />
          <li className="nav-item text-center">
            <Link to="/" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarVertical;
