import React from "react";
import { Link } from "react-router-dom";
import foodimg from "../assets/foodimg2.png";

function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-wrap">
      <div className="col-md-1"></div>
      <main
        className="col-lg-5 d-flex flex-column justify-content-center px-5 py-4"
        style={{ paddingLeft: "30px" }}
      >
        <h6 className="text-orange fw-bold mb-2">Welcome Back!</h6>
        <h2 className="fw-bolder display-5">
          <span className="border-bottom border-4 border-warning pb-1">
            Login
          </span>{" "}
          Your Account
        </h2>

        <section className="mt-4" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control py-2"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control py-2"
              placeholder="........"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="form-check-input me-1"
              />
              <label htmlFor="remember" className="form-check-label">
                Remember Password
              </label>
            </div>
            <Link to="/forgot" className="text-muted text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          <Link to="/home ">
            <button className="btn btn-warning text-white fw-bold w-100 py-2">
              Login Now
            </button>
          </Link>

          <p className="mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange text-decoration-none">
              Sign Up Now
            </Link>
          </p>

          <hr />
          <h5 className="fw-bold text-center mb-3">Login With</h5>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-danger d-flex align-items-center px-4">
              <i className="bi bi-google me-2"></i> Google
            </button>
            <button className="btn btn-primary d-flex align-items-center px-4">
              <i className="bi bi-facebook me-2"></i> Facebook
            </button>
          </div>
        </section>

        <footer className="mt-5 text-muted small ms-5">
          © 2025 <span className="text-orange fw-bold">TastyFood</span>. All
          rights reserved.
        </footer>
      </main>

      {/* Right Column - Image */}
      <div className="col-lg-6 d-none d-lg-block position-relative p-0">
        <img
          src={foodimg}
          alt="Delicious food"
          className="w-100 h-100 object-fit-cover"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute text-white"
          style={{
            bottom: "20%",
            left: "10%",
            zIndex: 1,
            maxWidth: "80%",
          }}
        >
          <h1 className="fw-bold display-4">
            Choosing The <br />
            Best <span style={{ color: "orange" }}>Quality Food</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
