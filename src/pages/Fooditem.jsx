import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Fooditem() {
  return (
    <>
      <div className="container-fluid bg-light min-vh-100">
        <Header />
        <div className="row py-5" style={{ marginTop: "120px" }}>
          <div className="col-lg-1"></div>

          <div className="col-lg-5 col-md-6 mb-4 d-flex justify-content-center align-items-center">
            <img
              src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
              alt="Cheese Burger"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-5 col-md-6 px-4">
            <h1 className="fw-bold display-5 text-dark">Cheese Burger</h1>

            <div className="mt-3">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="fa-solid fa-star text-warning fs-5 me-1"
                ></i>
              ))}
            </div>

            <p className="mt-4 text-muted lead">
              A juicy, cheesy classic burger crafted with fresh ingredients and
              irresistible flavor. Perfect for any meal of the day.
            </p>

            <h4 className="mt-4 text-dark">
              <span className="fw-bold">&#8377;120</span>{" "}
              <span className="text-decoration-line-through text-secondary fs-6 ms-2">
                140
              </span>{" "}
              <span className="text-success fw-semibold ms-2 fs-6">
                (25% off)
              </span>
            </h4>

            <div className="d-flex flex-wrap gap-2 mt-4">
              {["Veg", "Best Seller", "Limited Offer", "Meal for one"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="badge bg-secondary-subtle text-dark px-3 py-2 rounded-pill border"
                  >
                    <i className="fa-solid fa-tag me-1"></i> {tag}
                  </span>
                )
              )}
            </div>

            <div className="d-flex flex-column gap-3 mt-4">
              <Link to="/cart" className="w-100">
                <button className="btn btn-warning w-100 fs-5 fw-bold text-white shadow-sm">
                  Add to Cart
                </button>
              </Link>
              <Link to="/addressdetails" className="w-100">
                <button className="btn btn-success w-100 fs-5 fw-bold text-white shadow-sm">
                  Buy Item
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
        <div className="container-fluid mt-5">
          <h2 className="text-center fw-bold mb-4">Customer Reviews</h2>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold">Ravi Kumar</h5>
                <div className="text-warning mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                </div>
                <p className="text-muted">
                  Absolutely loved it! The cheese was perfectly melted and the
                  bun was soft and fresh. Will order again!
                </p>
              </div>
            </div>

            <div className="col mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold">Anjali Sharma</h5>
                <div className="text-warning mb-2">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                  <i className="fa-regular fa-star"></i>
                </div>
                <p className="text-muted">
                  Tasty and worth the price. Could have been a bit warmer but
                  still very satisfying. Nicely packed too.
                </p>
              </div>
            </div>

            <div className="col mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold">Anjali Sharma</h5>
                <div className="text-warning mb-2">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                  <i className="fa-regular fa-star"></i>
                </div>
                <p className="text-muted">
                  Tasty and worth the price. Could have been a bit warmer but
                  still very satisfying. Nicely packed too.
                </p>
              </div>
            </div>
            <div className="col mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold">Anjali Sharma</h5>
                <div className="text-warning mb-2">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star me-1"></i>
                  ))}
                  <i className="fa-regular fa-star"></i>
                </div>
                <p className="text-muted">
                  Tasty and worth the price. Could have been a bit warmer but
                  still very satisfying. Nicely packed too.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fooditem;
