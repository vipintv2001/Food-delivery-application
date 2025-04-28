import React, { useState } from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function Address() {
  const [showPayment, setShowPayment] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [show, setShow] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleButton = () => setShowButton(false);
  const handleShowPayement = () => setShowPayment(true);
  const handlePaymentMethod = (e) => setPaymentMethod(e.target.value);

  const handlePayment = () => {
    if (paymentMethod === "cod") {
      handleShow();
    } else if (paymentMethod === "card") {
      navigate("/payment");
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 pb-5">
      <Header />
      <div
        className="row justify-content-center py-5"
        style={{ marginTop: "100px" }}
      >
        {/* Address Form */}
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="text-center fw-bold text-primary mb-4">
              <i class="bi bi-truck"></i> Delivery Address
            </h4>
            <form>
              <div className="row g-2">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="House Name"
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                />
              </div>
              <div className="row g-2 mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Post Office"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pincode"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip"
                  />
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Landmark"
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="mt-4 text-center">
                <button className="btn btn-primary w-100 fs-5 fw-semibold">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Cart + Summary */}
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="text-center text-success mb-4 fw-bold">
              <i class="bi bi-cart"></i> Cart Summary
            </h5>
            <ul className="list-group list-group-flush fs-5">
              <li className="list-group-item d-flex justify-content-between">
                Subtotal <span>₹627</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                Delivery <span>₹100</span>
              </li>
              <li className="list-group-item d-flex justify-content-between fw-bold text-primary">
                Total <span>₹727</span>
              </li>
            </ul>

            {showButton && (
              <button
                className="btn btn-success w-100 mt-4 fs-5 fw-bold"
                onClick={() => {
                  handleButton();
                  handleShowPayement();
                }}
              >
                Proceed to Pay
              </button>
            )}

            {showPayment && (
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Choose Payment Method</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    id="cod"
                    value="cod"
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label" htmlFor="cod">
                    <i class="fa-solid fa-wallet"></i> Cash on Delivery
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment"
                    id="card"
                    value="card"
                    onChange={handlePaymentMethod}
                  />
                  <label className="form-check-label" htmlFor="card">
                    <i class="fa-solid fa-credit-card"></i> Credit / Debit Card
                  </label>
                </div>
                <div className="mt-4">
                  <button
                    className="btn btn-outline-primary w-100 fs-5 fw-bold"
                    onClick={handlePayment}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5 p-3 bg-light rounded border">
              <h6 className="text-dark fw-semibold mb-2">📝 Delivery Tips</h6>
              <ul className="mb-0">
                <li>Ensure your phone number is correct</li>
                <li>Mention nearby landmarks for quicker delivery</li>
                <li>Be available at delivery time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-5">
          Your order has been placed with <strong>Cash On Delivery</strong>.
          Please pay when items are delivered.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Address;
