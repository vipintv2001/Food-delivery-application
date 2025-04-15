import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark position-fixed w-100 top-0 custom-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container-fluid mt-3">
          <div>
            <h2 className="brandname fw-bolder navbar-brand">TastyFood</h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mobile-navbar"
            id="navbarSupportedContent"
          >
            {/* <div className="d-flex justify-content-between align-items-center gap-5">
            <h4 className="navlinks text-light fw-bolder">Home</h4>
            <h4 className="navlinks text-light fw-bolder">Orders</h4>
            <h4 className="navlinks text-light fw-bolder">About Us</h4>
            <h4 className="navlinks text-light fw-bolder">Contact Us</h4>
          </div> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto navbar-links text-center gap-3">
              <Link to={"/home"} style={{ textDecoration: "none" }}>
                <li className="nav-item navlinks">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <li className="nav-item navlinks">
                <a className="nav-link active" aria-current="page" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item navlinks">
                <a className="nav-link active" aria-current="page" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item navlinks">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav text-center">
              {/* <li className="nav-item">
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  <h5 className="signupbutton text-light fw-bold me-3">
                    Sign Up
                  </h5>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/cart"}>
                  <h4>
                    <i
                      className="fa-solid fa-cart-shopping fs-3 me-4 cartlink"
                      style={{ marginTop: "14px" }}
                    ></i>
                  </h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"}>
                  <button className="loginbutton btn btn-primary me-4">
                    LOG IN
                  </button>
                </Link>
              </li>
            </ul>

            {/* <div className="d-flex align-items-center gap-2">
              <div>
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  <h5 className="signupbutton text-light fw-bold me-3">
                    Sign Up
                  </h5>
                </Link>
              </div>
              <div>
                <Link to={"/login"}>
                  <button className="loginbutton btn btn-primary me-4">
                    LOG IN
                  </button>
                </Link>
              </div>
              <div>
                <h4>
                  <i className="fa-solid fa-cart-shopping text-light fs-3 mt-2 me-2"></i>
                </h4>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
