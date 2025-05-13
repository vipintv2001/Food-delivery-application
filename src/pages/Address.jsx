import React, { useState } from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import AddressSelector from "../components/AddressSelector"; // Component with modal map selector
import Footer from "../components/Footer";
import SuccessModal from "../components/SuccessModal";

function Address() {
  const [showPayment, setShowPayment] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [show, setShow] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [distance, setDistance] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const [addressData, setAddressData] = useState({
    house: "",
    street: "",
    postOffice: "",
    pincode: "",
    city: "",
    landmark: "",
  });
  const handleAddressSelect = (addressDetails, dist) => {
    setAddressData({
      house: addressDetails.house || "",
      street: addressDetails.street || "",
      postOffice: addressDetails.postOffice || "",
      pincode: addressDetails.pincode || "",
      city: addressDetails.city || "",
      landmark: addressDetails.landmark || "",
    });
    setDistance(dist);
    console.log("distance=", dist);
  };

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

  const chargePerKm = 20;
  const deliveryCharge = Math.floor(chargePerKm * distance);

  return (
    <>
      <div className="container-fluid bg-light min-vh-100 pb-5">
        <Header />
        <div
          className="row justify-content-center py-5"
          style={{ marginTop: "100px" }}
        >
          <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="text-center fw-bold text-primary mb-4">
                <i className="bi bi-truck"></i> Delivery Address
              </h4>
              <label className="form-label fw-semibold">
                Delivery Location
              </label>
              <AddressSelector onSelect={handleAddressSelect} />
              <form className="p-3">
                <div className="mb-4">
                  <h6 className="fw-semibold text-secondary mb-3">
                    <i className="bi bi-person-fill"></i> Personal Details
                  </h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sean"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="D"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold text-secondary mb-3">
                    <i className="bi bi-geo-alt-fill"></i> Address Details
                  </h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">House Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="House Name"
                        value={addressData.house}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            house: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Street</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Street Name"
                        value={addressData.street}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            street: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Post Office</label>
                      <input
                        type="text"
                        className="form-control"
                        value={addressData.postOffice}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            postOffice: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        value={addressData.pincode}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            pincode: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Landmark</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Landmark"
                        value={addressData.landmark}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            landmark: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        value={addressData.city}
                        onChange={(e) =>
                          setAddressData({
                            ...addressData,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary w-100 fs-5 fw-semibold mt-3">
                  Save Address
                </button>
              </form>
            </div>
          </div>

          {/* Cart + Summary */}
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="bg-white p-4 rounded shadow-sm">
              <h5 className="text-center text-success mb-4 fw-bold">
                <i className="bi bi-cart"></i> Cart Summary
              </h5>
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item d-flex justify-content-between">
                  Subtotal <span>₹627</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <p>
                    Delivery Charge{" "}
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      ({distance} km)
                    </span>
                  </p>{" "}
                  <span>₹{deliveryCharge}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold text-primary">
                  Total <span>₹{627 + deliveryCharge}</span>
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
                      <i className="fa-solid fa-wallet"></i> Cash on Delivery
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
                      <i className="fa-solid fa-credit-card"></i> Credit / Debit
                      Card
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
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                setTimeout(() => setShowSuccess(true), 300); // slight delay for smoother transition
              }}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
        <SuccessModal
          show={showSuccess}
          handleClose={() => setShowSuccess(false)}
        />
      </div>
      <Footer />
    </>
  );
}

export default Address;
