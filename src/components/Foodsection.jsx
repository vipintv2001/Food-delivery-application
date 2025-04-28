import React from "react";
import Foodcard from "./Foodcard";
import { Link } from "react-router-dom";

function Foodsection() {
  return (
    <div className="container-fluid my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-danger">🍜 Chinese Delights</h2>
        <p className="text-muted fs-5">
          Dive into our selection of delicious Chinese dishes.
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly">
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
        <Link
          to="/fooditem"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Foodcard />
        </Link>
      </div>
    </div>
  );
}

export default Foodsection;
