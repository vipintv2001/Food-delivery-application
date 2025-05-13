import React, { useEffect, useState } from "react";
import Staffsidebar from "../../components/Staffsidebar";

function Myorders() {
  const [orders, setOrders] = useState([
    {
      id: 201,
      customer: "Neha S.",
      phone: 22222314152,
      address: "Flat No 23,Silver villa,Kakkanad,Kochi",
      items: ["Pizza", "Coke"],
      status: "Processing",
      payment: "Unpaid",
    },
    {
      id: 202,
      customer: "Ravi M.",
      phone: 9562525292,
      address: "11 Ocean Drive,Kaloor,kochi",
      items: ["Burger", "Fries", "Pepsi"],
      status: "Out for Delivery",
      payment: "Paid",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handlePaymentChange = (id, newPayment) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, payment: newPayment } : order
      )
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Processing":
        return "bg-warning text-dark";
      case "Out for Delivery":
        return "bg-primary";
      case "Delivered":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };

  const getPaymentBadge = (payment) => {
    return payment === "Paid" ? "bg-success" : "bg-danger";
  };
  return (
    <>
      <div className="dashboard">
        <Staffsidebar />
        <div className="content staffcontent-bg">
          <div className="container py-5" style={{ minHeight: "100vh" }}>
            <h2 className="fw-bold mb-4 text-dark">📦 Claimed Orders</h2>

            <div className="row g-4">
              {orders.map((order) => (
                <div className="col-md-6" key={order.id}>
                  <div
                    className="card border-0 shadow-sm p-3 h-100"
                    style={{
                      borderRadius: "1rem",
                      background:
                        "linear-gradient(to bottom right, #ffffff, #edf2f7)",
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold mb-0 text-primary d-flex align-items-center gap-2">
                          <i className="bi bi-box-seam-fill fs-5"></i> Order #
                          {order.id}
                        </h5>
                        <span
                          className={`badge ${getStatusBadge(
                            order.status
                          )} px-3 py-2`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="mb-2 fs-5">
                        <strong>👤 Customer:</strong> {order.customer}
                      </div>
                      <div className="mb-2 fs-5">
                        <strong>📱 Phone Number:</strong> {order.phone}
                      </div>
                      <div className="mb-2 fs-5">
                        <strong>📍 Address:</strong> {order.address}
                      </div>
                      <div className="mb-3 fs-5">
                        <strong>🍽️ Items:</strong> {order.items.join(", ")}
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Delivery Status
                        </label>
                        <div className="d-flex align-items-center gap-3">
                          <span
                            className={`badge ${getStatusBadge(
                              order.status
                            )} px-3 py-2`}
                          >
                            {order.status}
                          </span>

                          {order.status !== "Delivered" && (
                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => {
                                const nextStatusMap = {
                                  Processing: "Out for Delivery",
                                  "Out for Delivery": "Delivered",
                                };
                                handleStatusChange(
                                  order.id,
                                  nextStatusMap[order.status]
                                );
                              }}
                            >
                              Mark as{" "}
                              {order.status === "Processing"
                                ? "Out for Delivery"
                                : "Delivered"}
                            </button>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="form-label fw-semibold">
                          Payment Status
                        </label>
                        <div className="d-flex align-items-center gap-3">
                          <span
                            className={`badge ${getPaymentBadge(
                              order.payment
                            )} px-3 py-2`}
                          >
                            {order.payment}
                          </span>

                          {order.payment === "Unpaid" && (
                            <button
                              className="btn btn-outline-success btn-sm"
                              onClick={() =>
                                handlePaymentChange(order.id, "Paid")
                              }
                            >
                              Mark as Paid
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {orders.length === 0 && (
              <div className="text-center text-muted mt-5 fs-5">
                No claimed orders currently.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Myorders;
