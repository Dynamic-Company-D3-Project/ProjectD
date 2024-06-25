
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Addresses from "./pages/Addresses";
import CurrentBookings from "./pages/CurrentBookings";
import UserDetails from "./pages/UserDetails";
import PastBookings from "./pages/PastBookings";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<Home />} />
        {/* <Route path={"/"+config.domain+"/signup/password"}  */}
        {/* <Route path={"/Addresses"} element={<Addresses/>}/>
        <Route path='CurrentBookings' element={<CurrentBookings />} />
        <Route path='UserDetails' element={<UserDetails />} />
        <Route path='PastBookings' element={<PastBookings />} />
        <Route path='Cart' element={<Cart/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
