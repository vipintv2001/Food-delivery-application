import React, { useEffect, useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import { getAllOrderApi } from "../../services/allApi";

function Trackorder() {
  const [loading,setLoading]=useState(true)
  const [orderDetails, setOrderDeatails] = useState([]);
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const getOrderDetails = async () => {
    setLoading(true)
    const orders = await getAllOrderApi(reqHeader);
    console.log("orderDetails:", orders.data);
    setOrderDeatails(orders.data);
    setLoading(false)
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    getOrderDetails();
  }, []);

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl); // Initialize Bootstrap tooltip
    });
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content content-bg">
        {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 fw-semibold text-muted">
                Loading, please wait...
              </p>
            </div>
          ) :
        (<div className="container-fluid">
          <div className="container py-5">
            <h2 className="text-center fw-bold mb-5 text-primary">
              <i className="bi bi-receipt me-2"></i>Orders Dashboard
            </h2>

            {/* Live Orders Section */}
            <section className="mb-5">
              <h4 className="text-center fw-semibold mb-4">
                <i className="bi bi-lightning-fill me-2 text-warning"></i>
                Live Orders
              </h4>

              <div className="row justify-content-center">
                <div className="col-lg-12 px-4">
                  <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm p-3">
                    <table className="table table-bordered table-hover align-middle text-center">
                      {orderDetails.filter((order) =>
                        ["processing", "out for delivery"].includes(
                          order.deliveryStatus
                        )
                      ).length > 0 && (
                        <thead className="table-dark">
                          <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Restaurant</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Delivery</th>
                          </tr>
                        </thead>
                      )}

                      <tbody>
                        {orderDetails.filter((order) =>
                          ["processing", "out for delivery"].includes(
                            order.deliveryStatus
                          )
                        ).length > 0 ? (
                          orderDetails
                            .filter((order) =>
                              ["processing", "out for delivery"].includes(
                                order.deliveryStatus
                              )
                            )
                            .map((order, index) => (
                              <tr
                                key={index}
                                className="bg-white shadow-sm"
                                style={{
                                  borderRadius: "10px",
                                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                }}
                              >
                                {/* ... your td columns remain unchanged ... */}
                              </tr>
                            ))
                        ) : (
                          <tr>
                            <td
                              colSpan="10"
                              className="text-center text-muted py-4"
                            >
                              <i className="bi bi-emoji-frown me-2"></i>No live
                              orders found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Previous Orders Section */}
            <section className="mt-5">
              <h4 className="text-center fw-semibold mb-4">
                <i className="bi bi-clock-history me-2 text-secondary"></i>
                Previous Orders
              </h4>

              <div className="row justify-content-center">
                <div className="col-lg-12 px-4">
                  <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm p-3">
                    <table className="table table-bordered table-hover align-middle text-center">
                      <thead className="table-secondary">
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Customer</th>
                          <th>Restaurant</th>
                          <th>Total</th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th>Delivery</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails.filter((order) =>
                          ["delivered", "cancelled"].includes(
                            order.deliveryStatus
                          )
                        ).length > 0 ? (
                          orderDetails
                            .filter((order) =>
                              ["delivered", "cancelled"].includes(
                                order.deliveryStatus
                              )
                            )
                            .map((order, index) => (
                              <tr
                                key={index}
                                className="bg-white shadow-sm"
                                style={{
                                  borderRadius: "10px",
                                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                }}
                              >
                                <td>{order._id.slice(-4).toUpperCase()}</td>
                                <td>
                                  {new Date(order.createdAt)
                                    .toLocaleDateString("en-IN", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                    })
                                    .replaceAll("/", "-")}{" "}
                                  {new Date(order.createdAt).toLocaleTimeString(
                                    "en-IN",
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    }
                                  )}
                                </td>
                                <td>{order.address?.name}</td>
                                <td>{order.cart[0]?.restaurentName || "NA"}</td>
                                <td>₹{order.totalPrice}</td>
                                <td>
                                  <span
                                    className={`badge rounded-pill ${
                                      order.paymentStatus === "cod"
                                        ? "bg-dark text-white"
                                        : "bg-success text-white"
                                    }`}
                                  >
                                    {order.paymentStatus === "cod"
                                      ? "cancelled"
                                      : "Paid"}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    className={`badge shadow-sm rounded-pill ${
                                      order.deliveryStatus === "delivered"
                                        ? "bg-success text-white"
                                        : "bg-danger text-white"
                                    }`}
                                  >
                                    {order.deliveryStatus}
                                  </span>
                                </td>
                                <td>
                                  {order.deliveryBoy ? (
                                    <span className="text-success fw-medium">
                                      <i className="bi bi-person-fill-check me-1"></i>
                                      {order.deliveryBoy}
                                    </span>
                                  ) : (
                                    <span className="text-danger fw-medium">
                                      <i className="bi bi-exclamation-triangle me-1"></i>
                                      Not Taken
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))
                        ) : (
                          <tr>
                            <td
                              colSpan="8"
                              className="text-center text-muted py-4"
                            >
                              <i className="bi bi-archive me-2"></i>No previous
                              orders
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default Trackorder;
