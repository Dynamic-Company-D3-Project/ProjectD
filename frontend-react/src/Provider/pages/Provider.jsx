import { Navigate, Outlet } from "react-router-dom";

function Provider() {
  const isLoggedIn = sessionStorage.getItem("token");

  return isLoggedIn === null ? <Navigate to="/provider/login" /> : <Outlet />;
}

export default Provider;
