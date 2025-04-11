import React from "react";
import Foodcard from "./Foodcard";
import { Link } from "react-router-dom";

function Foodsection() {
  return (
    <>
      <div className="mt-4">
        <h3 className="text-center fw-bolder">Chinese Items</h3>
        <div className="foodsection d-flex justify-content-center">
          <Link
            to={"/fooditem"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Foodcard />
          </Link>
          <Foodcard />
          <Foodcard />
          <Foodcard />
          <Foodcard />
          <Foodcard />
          <Foodcard />
          <Foodcard />
        </div>
      </div>
    </>
  );
}

export default Foodsection;
