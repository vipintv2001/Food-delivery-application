import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

function Staffsidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const handleActive = (data) => {
    setIsActive(data);
    console.log(data);
  };

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <button
        className="btn btn-dark btn-sidebar-toggle d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars"></i>
      </button>

      <div className="collapse d-md-block sidebar" id="sidebarMenu">
        <div className="sidebar-content">
          <h3 className="fw-bolder pt-4 ps-3 pb-2 text-center">
            Staff Dashboard
          </h3>
          <hr className="custom_hr mb-2" />
          <div className="px-4 links">
            <Link
              to={"/staffdashboard"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/staffdashboard" ? "active-item" : ""
                }`}
              >
                <i className="fa-solid fa-house me-2"></i> Home
              </h5>
            </Link>
            <Link
              to={"/staffdashboard/orders"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/staffdashboard/orders" ? "active-item" : ""
                }`}
              >
                <i className="fa-solid fa-bowl-food me-2"></i> Orders
              </h5>
            </Link>
            <Link
              to={"/staffdashboard/myorders"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/staffdashboard/myorders"
                    ? "active-item"
                    : ""
                }`}
              >
                <i className="fa-solid fa-plus me-2"></i> My Orders
              </h5>
            </Link>
          </div>
        </div>

        <div className="sidebar-footer" style={{ marginTop: "500px" }}>
          <hr className="custom_hr" />
          <div className="d-flex align-items-center position-relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
              alt="User"
              width="50"
              height="50"
              className="rounded-circle me-3"
            />
            <h5 className="m-0">
              user1{" "}
              <i
                className={`fa-solid fa-angle-down ms-1 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                style={{ cursor: "pointer", transition: "transform 0.3s" }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              ></i>
            </h5>
            {isDropdownOpen && (
              <ul className="activity_box">
                <Link
                  to={"/profile"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Profile</li>
                </Link>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Signout</li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Staffsidebar;
