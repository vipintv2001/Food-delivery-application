import React from "react";
import Header from "../components/Header";

function Fooditem() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row" style={{ marginTop: "160px" }}>
          <div className="col-lg-2 col-md-0 col-sm-0"></div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <img
              src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
              alt=""
              width={"100%"}
              height={"100%"}
              className="rounded"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ps-4">
            <h1 className="fw-bolder">Cheese Burger</h1>
            <h4 className="mt-3">
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
            </h4>
            <h5 className="mt-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </h5>
            <h4 className="fw-bolder mt-4" style={{ fontFamily: "Poppins" }}>
              &#8377; 120{" "}
              <span
                className="me-1"
                style={{
                  textDecoration: "line-through",
                  color: "grey",
                  fontSize: "20px",
                }}
              >
                140
              </span>
              <span style={{ fontWeight: "600", fontSize: "18px" }}>
                (25% off)
              </span>
            </h4>
            <div className="d-flex gap-3 mt-4">
              <p className="foodtags">
                <i className="fa-solid fa-seedling me-1"></i>Veg
              </p>
              <p className="foodtags">Best Seller</p>
              <p className="foodtags">Limited Offer</p>
              <p className="foodtags">Meal for one</p>
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-3">
              <button className="btn btn-warning w-100 fs-5 fw-bolder text-light mb-3">
                Add to Cart
              </button>
              <button className="btn btn-success w-100 fs-5 fw-bolder text-light">
                Buy Item
              </button>
            </div>
          </div>
          <div className="col-lg-2 col-md-0 col-sm-0"></div>
        </div>
      </div>
    </>
  );
}

export default Fooditem;
