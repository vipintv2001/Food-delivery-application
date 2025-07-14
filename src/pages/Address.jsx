import React, {  useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import AddressSelector from "../components/AddressSelector";
import Footer from "../components/Footer";
import SuccessModal from "../components/SuccessModal";
import {
  deleteCartApi,
  getUserDetailsApi,
  proceedToPayApi,
  setOrderApi,
} from "../services/allApi";
import { toast } from "react-toastify";

function Address() {
  const [showPayment, setShowPayment] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [show, setShow] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [isAddress, setIsAddress] = useState(false);
  const [restaurant,setRestaurent] = useState([]);
  const navigate = useNavigate();

  const [addressData, setAddressData] = useState({
    house: "",
    street: "",
    postOffice: "",
    pincode: "",
    city: "",
    landmark: "",
    deliCharge: "",
    totalPrice: "",
    duration:""
  });
  const handleAddressSelect = (addressDetails, dist, duration) => {
    setAddressData({
      house: addressDetails.house || "",
      street: addressDetails.street || "",
      postOffice: addressDetails.postOffice || "",
      pincode: addressDetails.pincode || "",
      city: addressDetails.city || "",
      landmark: addressDetails.landmark || "",
    });
    setDistance(dist);
    setDuration(duration);
    console.log("distance=", dist);
    console.log("duration:", duration);
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
      handlePCardPay();
      navigate("/payment");
    } else {
      alert("Please select a payment method.");
    }
  };

  const chargePerKm = 10;
  const deliveryCharge = Math.floor(chargePerKm * distance);

  useEffect(() => {
    const jwt_token = sessionStorage.getItem("token");
    if (!jwt_token) return;

    const getUserDetails = async () => {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      };
      const result = await getUserDetailsApi(reqHeader);
      setUserDetails(result.data.userDetails);
      console.log("user result:", result.data.userDetails);
      console.log("restaurent", result.data.restaurentDetails);
      setRestaurent(result.data.restaurentDetails);
    };
    getUserDetails();
  }, []);

  const handleSaveAddress = (e) => {
    e.preventDefault();
    const { house, street, postOffice, pincode, city, landmark } = addressData;
    if (!house || !street || !postOffice || !pincode || !city || !landmark) {
      toast.warning("please fill the form completely");
    } else {
      setAddressData({
        ...addressData,
        deliCharge: deliveryCharge,
        totalPrice: deliveryCharge + userDetails.cartSummary[0].subTotal,
        duration:duration
      });
      console.log("address:", addressData);
      toast.success("address saved Succesfully");
      setIsAddress(true);
    }
  };

  const handlePCardPay = async () => {
    const jwt_token = sessionStorage.getItem("token");
    if (!jwt_token) return;
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      };
      const reqBody = [
        userDetails.cart,
        {
          quantity: userDetails.cartSummary[0].quantity,
          gst: userDetails.cartSummary[0].gst,
          subTotal: userDetails.cartSummary[0].subTotal,
          restaurentId: userDetails.cartSummary[0].restaurentId,
          deliveryCharge: deliveryCharge,
          totalPrice: userDetails.cartSummary[0].subTotal + deliveryCharge,
          address: {
            HouseName: addressData.house,
            street: addressData.street,
            postOffice: addressData.postOffice,
            pinCode: addressData.pincode,
            city: addressData.city,
            landMark: addressData.landmark,
          },
          estimatedTime: duration,
        },
      ];
      console.log("req Body", reqBody);
      const result = await proceedToPayApi(reqBody, headers);
      if (result.status === 200) {
        console.log("details", result.data);
      } else {
        toast.error("error");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleOrderConfirmation = async () => {
    console.log("ordered addreess:", addressData);
    const orderData = { ...addressData, paymentStatus: "cod" };
    const token = sessionStorage.getItem("token");
    if (!token) return;
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await setOrderApi(orderData, reqHeader);
    if (result.status === 201) {
      await deleteCartApi(reqHeader);
    } else {
      toast.warning("some error occured");
    }
  };

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
              <AddressSelector
                onSelect={handleAddressSelect}
                restaurantLocation={[
                  restaurant.lattitude,
                  restaurant.longitude,
                ]}
              />
              <form className="p-3">
                <div className="mb-4">
                  <h6 className="fw-semibold text-secondary mb-3">
                    <i className="bi bi-person-fill"></i> Personal Details
                  </h6>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="UserName"
                        value={userDetails.name}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="9876543210"
                        value={userDetails.phone}
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

                <button
                  className="btn btn-primary w-100 fs-5 fw-semibold mt-3"
                  onClick={handleSaveAddress}
                >
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
                  Subtotal{" "}
                  <span>₹{userDetails?.cartSummary?.[0]?.subTotal ?? 0}</span>
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
                  Total{" "}
                  <span>
                    ₹
                    {userDetails?.cartSummary?.[0]?.subTotal != null
                      ? userDetails.cartSummary[0].subTotal + deliveryCharge
                      : 0}
                  </span>
                </li>
              </ul>

              {showButton && (
                <button
                  className="btn btn-success w-100 mt-4 fs-5 fw-bold"
                  onClick={() => {
                    handleButton();
                    handleShowPayement();
                  }}
                  disabled={!isAddress}
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
                handleOrderConfirmation();
                setTimeout(() => setShowSuccess(true), 300);
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
