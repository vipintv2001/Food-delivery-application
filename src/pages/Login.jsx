import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foodimg from "../assets/foodimg2.png";
import { toast } from "react-toastify";
import { getCartApi, loginUserApi } from "../services/allApi";
import LoadingSpinner from "../components/LoginSpinner";

function Login() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchUserCart = async () => {
    console.log("📦 Fetching user cart..."); // ✅ Add this
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const result = await getCartApi(reqHeader);
      const cart = result.data;
      console.log("📦 Full cart API result:", result);
      console.log("🛒 Cart fetched:", cart);

      if (cart.length > 0) {
        localStorage.setItem("selectedRestaurent", cart[0].restaurentId);
      } else {
        localStorage.removeItem("selectedRestaurent");
      }
    } catch (err) {
      console.log("🚨 Failed to fetch user cart", err);
    }
  };

  const handleLogin = async () => {
    const { email, password } = loginUser;
    if (!email || !password) {
      toast.warning("please fill the form completely");
    } else {
      setLoading(true);
      const result = await loginUserApi(loginUser);
      if (result.status === 200) {
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.userData)
        );
        sessionStorage.setItem("token", result.data.jwt_token);
        console.log(result.data.userData.role);
        if (result.data.role === "user") {
          if (result.data.userData.role === "admin") {
            navigate("/admindashboard");
            toast.success("login succesfully");
          } else {
            await fetchUserCart();
            console.log("hello world");
            navigate("/home");
            toast.success("login succesfully");
          }
        } else if (result.data.role === "staff") {
          navigate("/staffdashboard");
          toast.success("login succesfully");
        } else if (result.data.role === "restaurent") {
          navigate("/restaurentdashboard");
          toast.success("login succesfully");
        } else {
          await fetchUserCart();
          navigate("/home");
          toast.success("login succesfully");
        }
        setLoading(false);
      } else if (result.status === 406) {
        toast.warning("invalid email or password");
        setLoading(false)
      } else {
        toast.error("something went wrong");
        console.log("result:", result.data);
        setLoading(false)
      }
    }
  };
  return (
    <div className="container-fluid min-vh-100 d-flex flex-wrap">
      {loading && <LoadingSpinner />}
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
              onChange={(e) =>
                setLoginUser({ ...loginUser, email: e.target.value })
              }
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
              onChange={(e) =>
                setLoginUser({ ...loginUser, password: e.target.value })
              }
            />
          </div>

          <button
            className="btn btn-warning text-white fw-bold w-100 py-2"
            onClick={handleLogin}
          >
            Login Now
          </button>

          <p className="mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange text-decoration-none">
              Sign Up Now
            </Link>
          </p>

          <hr />
        </section>

        <footer className="mt-5 text-muted small ms-5">
          © 2025 <span className="text-orange fw-bold">TastyFood</span>. All
          rights reserved.
        </footer>
      </main>

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
