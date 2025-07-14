import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Orders from "./pages/Orders";
import Admindashboard from "./pages/admin/Admindashboard";
import Trackorder from "./pages/admin/Trackorder";
import Viewitems from "./pages/restaurent/Viewitems";
import Staffs from "./pages/admin/Staffs";
import Customer from "./pages/admin/Customer";
import Profile from "./pages/Profile";
import Staffdashboard from "./pages/staff/Staffdashboard";
import Stafforders from "./pages/staff/Orders";
import Myorders from "./pages/staff/Myorders";
import RevenueReport from "./pages/staff/RevenueReport"
import AboutRestaurant from "./pages/AboutRestaurent";
import Payment from "./pages/Payment";
import RestaurentDashboard from "./pages/restaurent/RestaurentDashboard";
import AddRestaurent from "./pages/admin/AddRestaurent";
import Additems from "./pages/restaurent/Additems";
import RestaurentOrder from "./pages/restaurent/RestaurentOrder";
import ScrollToTop from "./components/ScrollToTop";
import ViewRestaurent from "./pages/admin/ViewRestaurent";
import Contact from "./pages/Contact";
import AdminRevenue from "./pages/admin/AdminRevenue";
import RestaurentRevenue from "./pages/restaurent/RestaurentRevenue";

function App() {
  return (
    <>
      {/* <Header /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurent/:id" element={<AboutRestaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addressdetails" element={<Address />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/admindashboard/orders" element={<Trackorder />} />
        <Route
          path="/admindashboard/addrestaurent"
          element={<AddRestaurent />}
        />
        <Route path="/admindashboard/staffs" element={<Staffs />} />
        <Route path="/admindashboard/customer" element={<Customer />} />
        <Route path="/admindashboard/restaurent" element={<ViewRestaurent />} />
        <Route
          path="/admindashboard/earingreports"
          element={<AdminRevenue />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/staffdashboard" element={<Staffdashboard />} />
        <Route path="/staffdashboard/orders" element={<Stafforders />} />
        <Route path="/staffdashboard/myorders" element={<Myorders />} />
        <Route
          path="/staffdashboard/earingreports"
          element={<RevenueReport />}
        />
        <Route path="/restaurentdashboard" element={<RestaurentDashboard />} />
        <Route path="/restaurentdashboard/viewitems" element={<Viewitems />} />
        <Route path="/restaurentdashboard/additems" element={<Additems />} />
        <Route path="/restaurentdashboard/earingreports" element={<RestaurentRevenue />} />
        <Route path="/restaurentdashboard/orders" element={<RestaurentOrder />} />
      </Routes>
      {/* <Footer /> */}

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
}

export default App;
