import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Fooditem from "./pages/Fooditem";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/fooditem" element={<Fooditem/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Order/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
