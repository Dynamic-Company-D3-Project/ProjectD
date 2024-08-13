import Home from "./pages/Home";
import "./App.css";
import RegisterUser from "./pages/RegisterUser";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import ProviderLogin from "./Provider/pages/ProviderLogin";
import ProviderDashboard from "./Provider/pages/ProviderDashboard";

import ProviderOrders from "./Provider/pages/ProviderOrders";
import ProviderDetails from "./Provider/pages/ProviderDetails";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import PayNow from "./pages/PayNow";
import OngoingOrders from "./Admin/pages/OngoingOrders";
import UserSupport from "./Admin/pages/UserSupport";
import PendingCardPage from "./Admin/pages/PendingCardPage";
import PendingOrders from "./Admin/pages/PendingOrders";
import AdminProviderSupport from "./Admin/pages/AdminProviderSupport";
import Layout from "./Provider/pages/ProviderLayout";
import ProviderAssignedOrders from "./Provider/pages/ProviderAssignedOrders";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<ViewServices />} />
        <Route path={"/signup"} element={<RegisterUser />} />
        <Route path={"/login"} element={<LoginUser />} />
        <Route path={"/password/reset"} element={<ForgotPassword />} />
        <Route path={"/services/:id"} element={<Category />} />
        <Route path={"/about"} element={<ContactUs />} />
        <Route path={"/reviews"} element={<Reviews />} />

        <Route path={"/account"} element={<UserDetails />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/bookings"} element={<CurrentBookings />} />
        <Route path={"/bookings/past"} element={<PastBookings />} />
        <Route path={"/address"} element={<Addresses />} />
        <Route path={"/support"} element={<Support />} />
        <Route
          path={"/services/:category/:id"}
          element={<ProductDetails />}
        />
        <Route path={"/payment/:id"} element={<Payment />} />
        <Route path={"/paynow"} element={<PayNow />} />
        {/* Admin routes */}

        <Route path={"/admin/dashboard"} element={<AdminDashboard />} />
        <Route path={"/admin/details-user"} element={<AdminUserDetails />} />
        <Route path={"/admin/orders"} element={<AdminOrders />} />
        <Route path={"/admin/login"} element={<AdminLogin />} />
        <Route path={"/admin/category"} element={<AdminCategory />} />
        <Route path={"/admin/list-provider"} element={<AdminProviderList />} />
        <Route path={"/admin/orders-ongoing"} element={<OngoingOrders />} />
        <Route path={"/admin/orders-pending"} element={<PendingOrders />} />
        <Route path={"/admin/support-user"} element={<UserSupport />} />
        <Route
          path={"/admin/support-provider"}
          element={<AdminProviderSupport />}
        />
        <Route path={"/PendingCardPage"} element={<PendingCardPage />} />

        {/* <Route path={"/admin/support"} element={<AdminSupport />} /> */}

        {/* Provider Routes */}
        <Route path={"/provider/login"} element={<ProviderLogin />} />
        <Route
          path={"/provider/dashboard"}
          element={
            <Layout>
              <ProviderDashboard />
            </Layout>
          }
        />
        {/* <Route path={"/provider/support"} element={<ProviderSupport />} /> */}
        <Route
          path={"/provider/orders"}
          element={
            <Layout>
              <ProviderOrders />
            </Layout>
          }
        />
        <Route
          path={"/provider/detail"}
          element={
            <Layout>
              <ProviderDetails />
            </Layout>
          }
        />
        <Route
          path={"/provider/pending_orders"}
          element={
            <Layout>
              <ProviderAssignedOrders />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
