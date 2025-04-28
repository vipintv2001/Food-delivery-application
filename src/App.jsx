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
import Address from "./pages/Address";
import Orders from "./pages/Orders";
import Admindashboard from "./pages/admin/Admindashboard";
import Trackorder from "./pages/admin/Trackorder";
import Viewitems from "./pages/admin/Viewitems";
import Additems from "./pages/admin/Additems";
import Staffs from "./pages/admin/Staffs";
import Customer from "./pages/admin/Customer";
import Profile from "./pages/Profile";
import Staffdashboard from "./pages/staff/Staffdashboard";
import Edititems from "./pages/admin/Edititems";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fooditem" element={<Fooditem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addressdetails" element={<Address />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/admindashboard/orders" element={<Trackorder />} />
        <Route path="/admindashboard/viewitems" element={<Viewitems />} />
        <Route path="/admindashboard/additems" element={<Additems/>} />
        <Route path="/admindashboard/staffs" element={<Staffs/>} />
        <Route path="/admindashboard/customer" element={<Customer/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/staffdashboard" element={<Staffdashboard/>} /> 
        <Route path="/admindashboard/edititems" element={<Edititems/>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
