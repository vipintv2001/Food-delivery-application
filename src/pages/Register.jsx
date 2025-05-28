import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foodimg from "../assets/fastfood.png";
import { registerUserApi } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role:'user'
  });

  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log(userDetails);
    const { name, phone, email, password } = userDetails;

    if (!name || !phone || !email || !password) {
      toast.warning("please fill the form completly");
    } else {
      const result = await registerUserApi(userDetails);
      if (result.status === 201) {
        toast.success("registered Succesfully");
        navigate("/login");
      } else if (result.status === 409) {
        toast.warning("phone number or email already exists");
      } else {
        toast.error("something went wrong");
      }
    }
  };
  return (
    <div className="container-fluid min-vh-100 row gx-0">
      {/* Left Column - Form */}
      <main className="col-lg-6 d-flex justify-content-center align-items-center px-4 px-lg-5 py-5">
        <div style={{ width: "100%", maxWidth: "450px" }}>
          <h6 className="text-danger fw-semibold mb-2">Create Account</h6>
          <h2 className="fw-bolder display-5 mb-4">
            <span className="border-bottom border-3 border-danger pb-1">
              Sign Up
            </span>{" "}
            with TastyFood
          </h2>

          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-medium">
                Full Name
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="name"
                placeholder="John Doe"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-medium">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="phone"
                placeholder="+91 9876543210"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">
                Email Address
              </label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="you@example.com"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-medium">
                Password
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="password"
                placeholder="Create a strong password"
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>

            {/* <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label fw-medium">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="confirmPassword"
                placeholder="Re-enter your password"
              />
            </div> */}

            <button
              type="submit"
              className="btn btn-danger w-100 py-3 fw-bold fs-5 rounded-3"
              onClick={handleSubmit}
            >
              Create Account
            </button>

            <p className="mt-4 text-muted text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-danger text-decoration-none fw-semibold"
              >
                Login here
              </Link>
            </p>
          </div>

          <footer className="mt-5 text-muted small text-center">
            © 2025 <span className="text-danger fw-bold">TastyFood</span>. All
            rights reserved.
          </footer>
        </div>
      </main>

      {/* Right Column - Image */}
      <div className="col-lg-6 d-none d-lg-block position-relative p-0">
        <img
          src={foodimg}
          alt="Fast Food Display"
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
            Your Food <br />
            <span style={{ color: "red" }}>Adventure Starts</span> Here
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
