import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    setName("");
    navigate("/");
  };

  useEffect(() => {
    setName(JSON.parse(sessionStorage.getItem("existingUser")).name);
  }, []);

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
            Admin Dashboard
          </h3>
          <hr className="custom_hr mb-2" />
          <div className="px-4 links">
            <Link
              to={"/admindashboard"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard" ? "active-item" : ""
                }`}
              >
                <i className="fa-solid fa-house me-2"></i> Home
              </h5>
            </Link>
            <Link
              to={"/admindashboard/addrestaurent"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard/addrestaurent"
                    ? "active-item"
                    : ""
                }`}
              >
                <i className="fa-solid fa-plus me-2"></i> Add Restaurent
              </h5>
            </Link>
            <Link
              to={"/admindashboard/restaurent"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard/restaurent"
                    ? "active-item"
                    : ""
                }`}
              >
                <i className="bi bi-shop fs-4 me-2"></i> Restaurents
              </h5>
            </Link>
            <Link
              to={"/admindashboard/orders"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard/orders" ? "active-item" : ""
                }`}
              >
                <i class="bi bi-calendar me-2"></i> Orders
              </h5>
            </Link>
            <Link
              to={"/admindashboard/staffs"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard/staffs" ? "active-item" : ""
                }`}
              >
                <i class="bi bi-person-vcard-fill me-2"></i> Staffs
              </h5>
            </Link>
            <Link
              to={"/admindashboard/customer"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard/customer"
                    ? "active-item"
                    : ""
                }`}
              >
                <i class="bi bi-person me-2"></i> Customer
              </h5>
            </Link>
            <Link
              to={"/admindashboard/earingreports"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h5
                className={`sidebar_items ${
                  currentPath === "/admindashboard/earingreports"
                    ? "active-item"
                    : ""
                }`}
              >
                <i class="bi bi-cash-coin me-1"></i> Revenue Report
              </h5>
            </Link>
          </div>
        </div>

        <div className="sidebar-footer" style={{ marginTop: "400px" }}>
          <hr className="custom_hr mb-4" />
          <div className="d-flex align-items-center position-relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
              alt="User"
              width="50"
              height="50"
              className="rounded-circle me-3"
            />
            <h5 className="m-0">{name} </h5>
            <div className="dropdown dropup">
              <i
                className="fa-solid fa-angle-down ms-1 dropdown-toggle"
                role="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer", transition: "transform 0.3s" }}
              ></i>

              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow"
                aria-labelledby="dropdownMenuButton"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  minWidth: "140px",
                  padding: "0.5rem 0",
                }}
              >
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center gap-2 text-danger"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
