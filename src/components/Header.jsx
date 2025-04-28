import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

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
              <Link to="/menu" className="navlinks nav-link">
                Menu
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
                <i className="fa-solid fa-cart-shopping fs-3 cartlink"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button className="loginbutton">LOG IN</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
