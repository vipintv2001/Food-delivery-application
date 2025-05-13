import React, { useState } from "react";
import SuccessModal from "../components/SuccessModal";

function Payment() {
  const [show, setShow] = useState(false);

  return (
    <div className="container py-5" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center g-4">
        {/* Order Summary */}
        <div className="col-md-5">
          <div
            className="p-4 border-0 rounded-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f0f4f8, #ffffff)",
            }}
          >
            <h5 className="fw-bold text-primary mb-3">Order Summary</h5>
            <h2 className="text-success fw-bold mb-3">₹620.00</h2>
            <hr />

            <div className="d-flex justify-content-between mb-2">
              <div>
                <p className="mb-1 fw-semibold">Subtotal</p>
                <small className="text-muted">2 items</small>
              </div>
              <h6 className="text-dark fw-semibold">₹540</h6>
            </div>

            <div className="d-flex justify-content-between mt-3">
              <p className="mb-1 fw-semibold">Delivery Charge</p>
              <h6 className="text-dark fw-semibold">₹80</h6>
            </div>

            <hr />
            <div className="d-flex justify-content-between">
              <strong className="fs-5">Total Payable</strong>
              <strong className="fs-5 text-success">₹620.00</strong>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-lg">
            <h5 className="fw-bold text-primary mb-4">Pay with Card</h5>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="form-control rounded-pill px-4 py-2"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="form-control rounded-pill px-4 py-2"
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <label className="form-label">Expiry (MM/YY)</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="form-control rounded-pill px-4 py-2"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="form-control rounded-pill px-4 py-2"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control rounded-pill px-4 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Country</label>
                <select className="form-select rounded-pill px-4 py-2">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
              </div>

              <button
                type="button"
                className="btn btn-success w-100 fw-bold fs-5 py-3 rounded-pill"
                onClick={() => setShow(true)}
              >
                Pay ₹620.00
              </button>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal show={show} handleClose={() => setShow(false)} />
    </div>
  );
}

export default Payment;
