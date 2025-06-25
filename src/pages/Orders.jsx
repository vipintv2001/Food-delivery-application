import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cancelOrderApi, getUserOrderDetailsApi } from "../services/allApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Orders() {
  const [orderDetails, setOrderDeatails] = useState([]);
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const getOrderDetails = async () => {
    const orders = await getUserOrderDetailsApi(reqHeader);
    console.log("orderDetails:", orders.data);
    setOrderDeatails(orders.data);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    getOrderDetails();
  }, []);

  const handleCancelOrder = async (order) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You are about to cancel this order. This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel It",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("order", order);
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const reqBody = { deliveryStatus: "cancelled" };
        const result = await cancelOrderApi(order._id, reqBody, reqHeader);
        if (result.status === 201) {
          toast.success("cancelled the order succesfully");
          getOrderDetails();
        } else {
          toast.error("something went wrong");
        }
      }
    });
  };

  return (
    <>
      <div className="container-fluid bg-light min-vh-100 py-5">
        <Header />
        {!token ? (
          <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ minHeight: "70vh", marginTop: "80px" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
              alt="Login Required"
              style={{ width: "180px", marginBottom: "20px" }}
            />
            <h3 className="text-primary fw-bold">
              Please log in to view your orders
            </h3>
            <p className="text-muted">
              You must be logged in to see your order history and track your
              orders.
            </p>
            <Link to="/login">
              <button className="btn btn-success mt-3 px-4 py-2 fw-semibold">
                <i className="bi bi-box-arrow-in-right me-2"></i> Go to Login
              </button>
            </Link>
          </div>
        ) : orderDetails ? (
          <div className="container" style={{ marginTop: "60px" }}>
            <h3 className="text-center fw-bolder mb-4 text-primary">
              My Orders
            </h3>

            <div className="container mt-5">
              <h3 className="text-center fw-bold text-success mb-4">
                <i className="bi bi-truck me-2"></i>Current Order
              </h3>

              {orderDetails.filter(
                (order) =>
                  order.deliveryStatus === "processing" ||
                  order.deliveryStatus === "out for delivery"
              ).length > 0 ? (
                orderDetails
                  .filter(
                    (order) =>
                      order.deliveryStatus === "processing" ||
                      order.deliveryStatus === "out for delivery"
                  )
                  .map((order, idx) => {
                    const deliveryStatus = order.deliveryStatus || "Processing";
                    const paymentStatus = order.paymentStatus || "cod";

                    const estDeliveryTime = new Date(order.createdAt);
                    estDeliveryTime.setMinutes(
                      estDeliveryTime.getMinutes() + 45
                    );

                    return (
                      <div
                        key={idx}
                        className="card shadow border border-success-subtle mb-4 rounded-4"
                        style={{
                          backgroundColor: "#f6fff8",
                        }}
                      >
                        <div className="card-body px-4 py-3">
                          <div className="d-flex justify-content-between flex-wrap align-items-start mb-3">
                            <div>
                              <h5 className="fw-bold text-success mb-1">
                                <i className="bi bi-receipt me-2"></i>Order #
                                {order._id}
                              </h5>
                              <p className="mb-1 fs-6 fw-semibold text-dark">
                                <i className="bi bi-shop me-1"></i>
                                Restaurent: {order.cart[0].restaurentName}
                              </p>
                              <p className="mb-1 fs-6 fw-semibold text-dark">
                                <i className="bi bi-calendar-check me-1"></i>
                                Date:{" "}
                                {new Date(order.createdAt)
                                  .toLocaleDateString("en-IN")
                                  .replaceAll("/", "-")}
                              </p>
                              <p className="mb-1 fs-6 fw-semibold text-dark">
                                <i className="bi bi-clock me-1"></i>
                                Time:{" "}
                                {new Date(order.createdAt).toLocaleTimeString(
                                  "en-IN",
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                  }
                                )}
                              </p>
                              <p className="mb-1 fs-6 fw-semibold text-dark">
                                <i className="bi bi-stopwatch me-1"></i>
                                Estimated Delivery:{" "}
                                {estDeliveryTime.toLocaleTimeString("en-IN", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                })}
                              </p>
                            </div>

                            <div className="text-end">
                              <p className="fs-6 fw-bold text-dark mb-2">
                                Delivery Status:{" "}
                                <span
                                  className={`badge rounded-pill px-3 py-2 fs-6 shadow-sm ${
                                    deliveryStatus === "delivered"
                                      ? "bg-success text-white"
                                      : deliveryStatus === "processing"
                                      ? "bg-info text-dark"
                                      : deliveryStatus === "out for delivery"
                                      ? "bg-warning text-dark"
                                      : deliveryStatus === "cancelled"
                                      ? "bg-dark text-white"
                                      : "bg-secondary text-white"
                                  }`}
                                >
                                  {deliveryStatus}
                                </span>
                              </p>
                              <p className="fs-6 fw-bold text-dark">
                                Payment Status:{" "}
                                <span
                                  className={`badge rounded-pill px-3 py-2 fs-6 shadow-sm ${
                                    paymentStatus === "cod"
                                      ? "bg-warning text-dark"
                                      : "bg-success text-white"
                                  }`}
                                >
                                  {paymentStatus === "cod"
                                    ? "Cash on Delivery"
                                    : "Paid"}
                                </span>
                              </p>
                            </div>
                          </div>

                          <hr className="mb-3" />

                          {/* Cart Items */}
                          <h6 className="text-secondary fw-bold mb-2">
                            Items Ordered
                          </h6>
                          {order.cart.map((item, i) => (
                            <div
                              key={i}
                              className="d-flex justify-content-between align-items-center py-1 px-2 border-bottom"
                            >
                              <span>
                                {item.quantity} x {item.productName}
                              </span>
                              <span className="fw-semibold">
                                ₹
                                {item.quantity *
                                  Math.floor(
                                    item.price -
                                      (item.price * item.discount) / 100
                                  )}
                              </span>
                            </div>
                          ))}

                          {/* Charges */}
                          <div className="mt-3 pt-3 px-2 border-top">
                            <p className="mb-1">
                              <strong>GST (12%):</strong>
                              <span className="fs-6 fw-bolder ms-2">
                                ₹{order.cartSummary[0].gst}
                              </span>
                            </p>
                            <p className="mb-1">
                              <strong>Subtotal:</strong>
                              <span className="fs-6 fw-bolder ms-2">
                                ₹{order.cartSummary[0].subTotal}
                              </span>
                            </p>
                            <p className="mb-1">
                              <strong>Delivery Charge:</strong>
                              <span className="fs-6 fw-bolder ms-2">
                                ₹{order.deliveryCharge}
                              </span>
                            </p>
                            <p className="fw-bold fs-5 text-success mt-2">
                              Total: ₹{order.totalPrice}
                            </p>
                          </div>

                          {/* Cancel Button */}
                          <div className="text-end mt-3">
                            <button
                              className="btn btn-outline-danger rounded-pill px-4"
                              onClick={() => handleCancelOrder(order)}
                            >
                              <i className="bi bi-x-circle me-1"></i> Cancel
                              Order
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div className="text-center mt-5">
                  <h5 className="text-muted">You have no current orders</h5>
                </div>
              )}
            </div>

            <h4 className="text-center fw-bold text-secondary mt-5 mb-4">
              <i className="bi bi-archive-fill me-2"></i>Previous Orders
            </h4>

            {orderDetails?.filter(
              (order) =>
                order.deliveryStatus === "delivered" ||
                order.deliveryStatus === "cancelled"
            ).length > 0 ? (
              orderDetails
                .filter(
                  (order) =>
                    order.deliveryStatus === "delivered" ||
                    order.deliveryStatus === "cancelled"
                )
                .map((order, index) => (
                  <div
                    key={index}
                    className="card mb-4 border border-2 border-primary-subtle rounded-4 shadow-sm"
                    style={{ backgroundColor: "#fefefe" }}
                  >
                    <div className="card-body px-4 py-3">
                      <div className="d-flex justify-content-between flex-wrap mb-3">
                        <h5 className="fw-bold text-primary">
                          <i className="bi bi-receipt-cutoff me-2"></i>Order #
                          {order._id.slice(-6)}
                        </h5>
                        <p className="text-muted fw-medium fs-6 mb-0">
                          <i className="bi bi-calendar-event me-2"></i>
                          {new Date(order.createdAt)
                            .toLocaleDateString("en-IN")
                            .replaceAll("/", "-")}
                        </p>
                      </div>

                      <hr className="mb-3" />

                      <div className="row text-center text-md-start g-3 mb-3">
                        <div className="col-md-3">
                          <h6 className="fw-semibold text-dark">Restaurant</h6>
                          <p className="mb-2 text-primary fw-bold">
                            {order.cart[0].restaurentName || "N/A"}
                          </p>

                          <h6 className="fw-semibold text-dark">Items</h6>
                          {order.cart.map((item, idx) => (
                            <p key={idx} className="mb-1 small text-muted">
                              {item.quantity} × {item.productName}
                            </p>
                          ))}
                        </div>

                        <div className="col-md-2">
                          <h6 className="fw-semibold text-dark">Total</h6>
                          <p className="fw-bold text-success fs-5 mb-0">
                            ₹{order.totalPrice}
                          </p>
                        </div>

                        <div className="col-md-3">
                          <h6 className="fw-semibold text-dark">Payment</h6>
                          <span
                            className={`badge rounded-pill fs-6 px-3 py-2 ${
                              order.paymentStatus === "cod"
                                ? "bg-dark text-white"
                                : "bg-success text-white"
                            }`}
                          >
                            {order.paymentStatus === "cod"
                              ? "cancelled"
                              : "Paid"}
                          </span>
                        </div>

                        <div className="col-md-4">
                          <h6 className="fw-semibold text-dark">
                            Delivery Status
                          </h6>
                          <span
                            className={`badge rounded-pill fs-6 px-4 py-2 ${
                              order.deliveryStatus === "delivered"
                                ? "bg-success"
                                : order.deliveryStatus === "cancelled"
                                ? "bg-danger"
                                : "bg-secondary"
                            }`}
                          >
                            {order.deliveryStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center text-muted mt-4">
                <h5>
                  <i className="bi bi-emoji-frown me-2"></i>No Previous Orders
                  Found
                </h5>
              </div>
            )}
          </div>
        ) : (
          <p>NO Order History</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Orders;
