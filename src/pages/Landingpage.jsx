import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="landingpage_background container-fluid">
        <div className="overlay"></div>

        <nav className="p-4 d-flex justify-content-between align-items-center flex-wrap">
          <h2 className="brandname fw-bolder">TastyFood</h2>
          <div className="buttons d-flex flex-wrap justify-content-center gap-2 mt-2">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <h5 className="signupbutton text-light fw-bold">Sign Up</h5>
            </Link>
            <Link to="/login">
              <button className="loginbutton btn btn-primary">LOG IN</button>
            </Link>
          </div>
        </nav>

        <div className="content px-3 px-md-5 pt-5">
          <h1 className="landing-title">
            Where Taste Meets <br /> Convenience
          </h1>
          <h5 className="landing-subtitle">
            Explore a curated menu of gourmet dishes from top restaurants,{" "}
            <br />
            delivered fresh and fast with TastyFood
          </h5>
          <Link to="/home">
            <button className="btn btn-success mt-3 fs-5 fw-bolder get-started-btn">
              GET STARTED <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
