import Home from "./pages/Home";
import "./App.css";
import RegisterUser from "./pages/RegisterUser";
import { Route, Routes } from "react-router-dom";

import LoginUser from "./pages/LoginUser";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";
import ViewServices from "./pages/ViewServices";
import AdminLogin from "./Admin/pages/AdminLogin";
import ContactUs from "./pages/ContactUs";
import Reviews from "./pages/Reviews";
import UserDetails from "./pages/UserDetails";
import Cart from "./pages/Cart";
import CurrentBookings from "./pages/CurrentBookings";
import PastBookings from "./pages/PastBookings";
import Addresses from "./pages/Addresses";
import Support from "./pages/Support";
// import AdminSupport from "./Admin/pages/AdminSupport";
//Admin
import AdminDashboard from "./Admin/pages/AdminDashboard";
import AdminUserDetails from "./Admin/pages/AdminUserDetails";
import AdminOrders from "./Admin/pages/AdminOrders";
import AdminCategory from "./Admin/pages/AdminCategory";
import AdminProviderList from "./Admin/pages/AdminProviderList";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<ViewServices />} />
        <Route path={"/signup/password"} element={<RegisterUser />} />
        <Route path={"/login/email"} element={<LoginUser />} />
        <Route path={"/password/reset"} element={<ForgotPassword />} />
        <Route path={"/services/:category"} element={<Category />} />
        <Route path={"/about"} element={<ContactUs />} />
        <Route path={"/reviews"} element={<Reviews />} />

        <Route path={"/account"} element={<UserDetails />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/bookings"} element={<CurrentBookings />} />
        <Route path={"/bookings/past"} element={<PastBookings />} />
        <Route path={"/address"} element={<Addresses />} />
        <Route path={"/support"} element={<Support />} />
        {/* Admin routes */}

        <Route path={"/admin/dashboard"} element={<AdminDashboard />} />
        <Route path={"/admin/details-user"} element={<AdminUserDetails />} />
        <Route path={"/admin/orders"} element={<AdminOrders />} />
        <Route path={"/admin/login"} element={<AdminLogin />} />
        <Route path={"/admin/category"} element={<AdminCategory />} />
        <Route path={"/admin/list-provider"} element={<AdminProviderList />} />
        {/* <Route path={"/admin/support"} element={<AdminSupport />} /> */}
      </Routes>
    </div>
  );
}

export default App;
