import React, { useState } from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function Order() {
  const [showPayment, setShowPayment] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [show, setShow] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButton = () => {
    setShowButton(false);
  };

  const handleShowPayement = () => {
    setShowPayment(true);
  };

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
    console.log(e.target.value);
  };

  const handlePayment = () => {
    if (paymentMethod == "cod") {
      handleShow();
    } else if (paymentMethod == "card") {
      navigate("/payment");
    } else {
      alert("please select a payment method");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-7 col-md-8 col-sm-12 mt-4">
            <h4 className="text-center mt-5 fw-bolder">Delivary Details</h4>
            <form className="mt-3">
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="Name"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="House Name"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="Street"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mt-2">
                  <input
                    type="text"
                    className="form-control border-dark"
                    placeholder="Post Office"
                  />
                </div>
                <div className="col-md-3 mt-2">
                  <input
                    type="text"
                    className="form-control border-dark"
                    placeholder="Pincode"
                  />
                </div>
                <div className="col-md-3 mt-2">
                  <input
                    type="text"
                    className="form-control border-dark"
                    placeholder="Zip"
                  />
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="LandMark"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  className="form-control border-dark"
                  placeholder="City"
                />
              </div>
              <div className="mt-4">
                <button className="btn btn-primary fs-5">Save Details</button>
              </div>
            </form>
          </div>
          <div className="col-lg-1 col-md-0 col-sm-0"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
            <h5 className="text-center mt-5">Cart Details</h5>
            <div>
              <ul class="list-group list-group-flush fs-5 ms-5">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Total Products
                  <span>- 5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Price
                  <span>- 560</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  GST(12%)
                  <span>-{Math.floor((560 * 12) / 100)}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Delivery Charge
                  <span>- 100</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center fw-bolder">
                  Total
                  <span>- 727</span>
                </li>

                {showButton && (
                  <button
                    className="btn btn-success w-100 mt-3 fs-5 fw-bolder"
                    onClick={() => {
                      handleButton();
                      handleShowPayement();
                    }}
                  >
                    Proceed To Pay
                  </button>
                )}
                {showPayment && (
                  <div className="mt-5">
                    <h5 className="fw-bolder">Select Payment Method</h5>
                    <div class="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="cod"
                        value="cod"
                        onChange={handlePaymentMethod}
                      />
                      <label className="form-check-label" htmlFor="cod">
                        Cash On Delivery
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="card"
                        value="card"
                        onChange={handlePaymentMethod}
                      />
                      <label className="form-check-label" htmlFor="card">
                        Credit/Debit Card
                      </label>
                    </div>
                    <div className="mt-3">
                      <button
                        className="btn btn-success w-100 fs-5 fw-bolder"
                        onClick={handlePayment}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>Confirm Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fs-5">
          Confirming Cash On Delivery.Amount Should Be Given When the Items Delivered
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
    </>
  );
}

export default Order;
