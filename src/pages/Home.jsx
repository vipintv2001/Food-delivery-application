import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerimg from "../assets/landingpageimg.png";
import "./Home.css";
import RestaurentSection from "../components/RestaurentSection";
import { useLocation } from "react-router-dom";

function Home() {
  const [selectedCity, setSelectedCity] = useState("");
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
        }, 100); // small delay ensures DOM is ready
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
            {/* <div className="d-flex justify-content-center align-items-center my-4">
              <div className="location-bar d-flex align-items-center bg-white shadow-sm px-3 py-2 rounded-pill">
                <select
                  className="form-select border-0 bg-transparent fw-semibold"
                  style={{ width: "140px", outline: "none", boxShadow: "none" }}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="Kochi">Kochi</option>
                  <option value="Ahmedabad">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                </select>

                <div className="d-flex align-items-center mx-3 text-secondary">
                  <i className="bi bi-geo-alt-fill me-1 text-warning"></i>{" "}
                  <span className="fw-medium">Select City</span>
                </div>

                <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill ms-auto">
                  Order Now
                </button>
              </div>
            </div> */}
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
