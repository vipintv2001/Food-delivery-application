import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bannerimg from "../assets/landingpageimg.png";
import "./Home.css";
import Foodsection from "../components/Foodsection";

function Home() {
  return (
    <>
      <div className="homebanner">
        <div className="overlay"></div>
        <div className="header container-fluid">
          <Header />
        </div>
        <div className="banner-content d-flex justify-content-center align-items-center flex-column w-100 h-100">
          <div className="banner_content d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center fw-bolder text-light">
              Discover <br /> Delicious Food
            </h1>
            <h4 className="text-center text-light">
              Explore wide variety of dishes and order <br />
              your next meal
            </h4>
            <button
              className="btn btn-warning banner-button px-5 py-3 mt-2 fs-4 fw-bolder"
              style={{ borderRadius: "10px" }}
              href="#menu"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <main>
        <section id="menu">
          <Foodsection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
