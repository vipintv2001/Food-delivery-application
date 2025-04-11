import React from "react";
import { Link } from "react-router-dom";
import foodimg from "../assets/foodimg2.png";

function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-center flex-column">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h2 className="brandname text-center">TastyFood</h2>
              <h1 className="text-danger mt-3 fw-bolder">Log In</h1>
            </div>
            <div style={{ width: "50%" }} className="mt-4">
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
              <Link to={"/home"}>
                <button
                  className="btn btn-danger mt-3 w-100 py-3 fs-4 fw-bolder text-light"
                  style={{ borderRadius: "9px" }}
                >
                  LogIn
                </button>
              </Link>
            </div>
          </div>
          <div className="col-6 p-0">
            <img src={foodimg} alt="" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
