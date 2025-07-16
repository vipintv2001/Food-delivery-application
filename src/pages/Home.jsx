import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";
import RestaurentSection from "../components/RestaurentSection";
import { useLocation } from "react-router-dom";

function Home() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="homebanner">
        <div
          className={`header container-fluid ${
            scrolled ? "navbar-scrolled" : ""
          }`}
        >
          <Header />
        </div>
        <div className="overlay"></div>
        <div className="banner-content d-flex justify-content-center align-items-center flex-column w-100 h-100">
          <div className="banner_content d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center fw-bolder text-light">
              Discover <br /> Delicious Food
            </h1>
            <h4 className="text-center text-light">
              Explore wide variety of dishes and order <br />
              your next meal
            </h4>
           
            <div>
              <button
                className="btn btn-warning px-5 fs-3 fw-bold py-3"
                style={{ borderRadius: "24px" }}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section id="restaurent">
          <RestaurentSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
