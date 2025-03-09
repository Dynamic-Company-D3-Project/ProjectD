import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div
        className="navbar bg-base-100"
        style={{ backgroundColor: "#FFBF78" }}
      >
        <div className="flex-none">
          <a className="btn btn-ghost text-xl" href={"/"}>
            QUIKEASY
          </a>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={"/services"}>
            View All Services
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="btn mr-2" to={"/signup"}>
            Sign Up
          </Link>
          <Link className="btn" to={"/login"}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
