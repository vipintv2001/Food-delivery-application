import React, { useEffect, useState } from "react";
import SuccessModal from "../components/SuccessModal";
import {
  deleteCartApi,
  getUserDetailsApi,
  setOrderApi,
} from "../services/allApi";
import { toast } from "react-toastify";

function Payment() {
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [cardDetails, setCardDetails] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    cardHolderName: "",
    coutry: "",
  });

  const handlePayment = () => {
    const { email, cardNumber, expiry, cvc, cardHolderName, coutry } =
      cardDetails;
    if (
      !email ||
      !cardNumber ||
      !expiry ||
      !cvc ||
      !cardHolderName ||
      !coutry
    ) {
      toast.warning("please fill the card details to pay");
    } else {
      handleOrderConfirmation();
    }
  };

  const handleOrderConfirmation = async () => {
    console.log("ordered addreess:", userDetails.cartSummary[0].address);
    const addressDetail = userDetails.cartSummary[0].address;
    const orderData = {
      ...addressDetail,
      totalPrice: userDetails.cartSummary[0].totalPrice,
      deliCharge: userDetails.cartSummary[0].deliveryCharge,
      paymentStatus: "card",
      duration: userDetails.cartSummary[0].estimatedTime,
    };
    const token = sessionStorage.getItem("token");
    if (!token) return;
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await setOrderApi(orderData, reqHeader);
    if (result.status === 201) {
      await deleteCartApi(reqHeader);
      setShow(true);
    } else {
      toast.warning("some error occured");
    }
  };

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
      console.log("user result:", result.data);
    };
    getUserDetails();
  }, []);

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
            {userDetails.cartSummary && userDetails.cartSummary[0] ? (
              <>
                <h2 className="text-success fw-bold mb-3">
                  {userDetails.cartSummary[0].totalPrice}
                </h2>
                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <p className="mb-1 fw-semibold">Subtotal</p>
                    <small className="text-muted">
                      {userDetails.cartSummary[0].quantity} items
                    </small>
                  </div>
                  <h6 className="text-dark fw-semibold">
                    ₹{userDetails.cartSummary[0].subTotal}
                  </h6>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <p className="mb-1 fw-semibold">Delivery Charge</p>
                  <h6 className="text-dark fw-semibold">
                    ₹{userDetails.cartSummary[0].deliveryCharge}
                  </h6>
                </div>

                <hr />
                <div className="d-flex justify-content-between">
                  <strong className="fs-5">Total Payable</strong>
                  <strong className="fs-5 text-success">
                    ₹{userDetails.cartSummary[0].totalPrice}
                  </strong>
                </div>
              </>
            ) : (
              <p>Order Summary Loading....</p>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-4 bg-white rounded-4 shadow-lg">
            <h5 className="fw-bold text-primary mb-4">Pay with Card</h5>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePayment();
              }}
            >
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="form-control rounded-pill px-4 py-2"
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="form-control rounded-pill px-4 py-2"
                  minLength="16"
                  maxLength="16"
                  pattern="\d{16}"
                  title="Enter a 16-digit card number"
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardNumber: e.target.value,
                    })
                  }
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <label className="form-label">Expiry (MM/YY)</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="form-control rounded-pill px-4 py-2"
                    pattern="(0[1-9]|1[0-2])\/\d{2}"
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="form-control rounded-pill px-4 py-2"
                    minLength="3"
                    maxLength="3"
                    pattern="\d{3}"
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvc: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control rounded-pill px-4 py-2"
                  minLength="3"
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardHolderName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Country</label>
                <select
                  className="form-select rounded-pill px-4 py-2"
                  defaultValue=""
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, coutry: e.target.value })
                  }
                >
                  <option selected disabled>
                    select Coutry
                  </option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 fw-bold fs-5 py-3 rounded-pill"
              >
                Pay ₹
                {userDetails.cartSummary && userDetails.cartSummary[0]
                  ? userDetails.cartSummary[0].totalPrice
                  : "0"}
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
