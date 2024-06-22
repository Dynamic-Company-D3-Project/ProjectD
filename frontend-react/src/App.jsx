import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<Home />} />
        {/* <Route path={"/"+config.domain+"/signup/password"}  */}
      </Routes>
    </div>
  );
}

export default App;
