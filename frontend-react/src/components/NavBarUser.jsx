import { Link } from "react-router-dom";
function NavBarUser() {
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
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/account" className="justify-between">
                  Account
                </a>
              </li>
              <li>
                <a href="/cart">MyCart</a>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarUser;
