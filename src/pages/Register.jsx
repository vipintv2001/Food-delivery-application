import React from "react";
import foodimg from "../assets/fastfood.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0">
            <img src={foodimg} alt="" width={"100%"} height={"100%"} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h2 className="brandname text-center">TastyFood</h2>
              <h1 className="text-danger mt-3 fw-bolder">Sign Up</h1>
              <p>Create an Account to Start Your Journey</p>
            </div>
            <div style={{ width: "50%" }}>
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-3 py-2"
              />
              <input
                type="text"
                placeholder="PhoneNumber"
                className="form-control mb-3 py-2"
              />
              <input
                type="email"
                placeholder="Email id"
                className="form-control mb-3 py-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3 py-2"
              />
              <input
                type="password"
                placeholder="Confirm Your PassWord"
                className="form-control mb-3 py-2"
              />
              <Link to={"/login"}>
                <button
                  className="btn btn-danger mt-3 w-100 py-3 fs-4 fw-bolder text-light"
                  style={{ borderRadius: "9px" }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <p className="mt-2">
              Already have an Account? <Link to={'/login'}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
