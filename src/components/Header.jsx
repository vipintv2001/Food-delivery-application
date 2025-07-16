import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    localStorage.removeItem("selectedRestaurent");
    setIsLoggedIn(false);
    setUserName("");
    navigate('/home')
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      setIsLoggedIn(true);
      setUserName(JSON.parse(sessionStorage.getItem("existingUser")).name);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container-fluid px-4">
        <Link to="/home" className="navbar-brand brandname">
          TastyFood
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mobile-navbar"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto text-center gap-3">
            <li className="nav-item">
              <Link to="/home" className="navlinks nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home#restaurent" className="navlinks nav-link">
                Restaurents
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="navlinks nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="navlinks nav-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav text-center d-flex flex-row align-items-center">
            <li className="nav-item me-3">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping fs-3 cartlink me-2"></i>
              </Link>
            </li>

            <li className="nav-item dropdown">
              {!isLoggedIn ? (
                <Link to="/login">
                  <Link to="/login">
                    <button className="loginbutton">LOG IN</button>
                  </Link>
                </Link>
              ) : (
                <>
                  <button
                    className="btn btn-outline-light dropdown-toggle d-flex align-items-center gap-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-fill fs-5"></i>
                    <span className="fw-semibold">Hi, {userName}</span>
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end shadow">
                    {/* <li>
                      <Link
                        className="dropdown-item d-flex align-items-center gap-2"
                        to="/profile"
                      >
                        <i className="bi bi-person-circle"></i> Profile
                      </Link>
                    </li> */}
                    <li>
                      <button
                        className="dropdown-item d-flex align-items-center gap-2 text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right"></i> Log Out
                      </button>
                    </li>
                  </ul>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
