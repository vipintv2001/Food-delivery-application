import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Cart() {

  return (
    <>
      <div className="container-fluid bg-light min-vh-100">
        <Header />
        <div className="text-center mb-4" style={{ marginTop: "100px" }}>
          <h2 className="fw-bold text-primary">
            <i class="bi bi-cart-check"></i> Your Cart
          </h2>
          <p className="text-muted">Review items and proceed to checkout</p>
        </div>
        <div className="row">
          <div className="col-lg-8 px-4">
            <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm p-3">
              <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg"
                          alt="burger"
                          className="rounded border"
                          style={{
                            width: "90px",
                            height: "70px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>Cheese Burger</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <button className="btn btn-sm btn-outline-secondary me-2" >
                            -
                          </button>
                          <span>2</span>
                          <button className="btn btn-sm btn-outline-secondary ms-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td>120</td>
                      <td>
                        <i className="fa-solid fa-trash fs-5 text-danger"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center mt-4">
                <Link to={"/home#menu"}>
                  <button className="btn btn-outline-success px-4 py-2 fs-5">
                    + Add More Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Right: Summary */}
          <div className="col-lg-4 px-4 mt-4 mt-lg-0">
            <div className="bg-white p-4 rounded shadow-sm border border-success-subtle">
              <h5 className="text-center mb-4 fw-bold text-success">
                <i class="fa-solid fa-bag-shopping me-2"></i> Summary
              </h5>
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item d-flex justify-content-between">
                  Total Items <span>5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Subtotal <span>₹ 480</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  GST (12%) <span>₹ {Math.floor((480 * 12) / 100)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Delivery <span>₹ 100</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold text-primary">
                  Total <span>₹ 620</span>
                </li>
              </ul>
              <Link to="/addressdetails">
                <button className="btn btn-success w-100 mt-4 py-2 fs-5 fw-bold">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
