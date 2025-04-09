import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <div className="landingpage_background">
        <div className="overlay"></div>
        <nav className="p-4 ms-5 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="brandname fw-bolder">TastyFood</h2>
          </div>
          <div className="buttons d-flex gap-2">
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
          </div>
        </nav>
        <div className="content ms-5 p-5">
          <h1
            style={{ color: "white", fontSize: "72px", fontWeight: "bolder" }}
          >
            Where Taste Meets <br /> Convenience
          </h1>
          <h5 style={{ color: "#DADADA" }}>
            Explore a curated menu of gourmet dishes from top restaurant,
            <br />
            delivered fresh and fast with TastyFood
          </h5>
          <Link to={"/home"}>
            <button className="btn btn-success px-3 py-3 mt-2 fs-5 fw-bolder">
              GET STARTED <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
