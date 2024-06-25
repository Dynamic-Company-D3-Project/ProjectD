import Home from "./pages/Home";
import "./App.css";
import RegisterUser from "./pages/RegisterUser";
import { Route, Routes } from "react-router-dom";
import LoginUser from "./pages/LoginUser";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";
import ViewServices from "./pages/ViewServices";
import AdminNavBar from "./Admin/components/AdminNavBar";
import AdminLogin from "./Admin/pages/AdminLogin";
import ContactUs from "./pages/ContactUs";
// import AdminSupport from "./Admin/pages/AdminSupport";

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
        {/* Admin routes */}
        <Route path={"/admin/dashboard"} element={<AdminNavBar />} />
        <Route path={"/admin/login"} element={<AdminLogin />} />
        {/* <Route path={"/admin/support"} element={<AdminSupport />} /> */}
      </Routes>
    </div>
  );
}

export default App;
