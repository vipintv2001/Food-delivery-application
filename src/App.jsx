import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
