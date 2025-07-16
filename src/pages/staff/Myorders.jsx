import React, { useEffect, useState } from "react";
import Staffsidebar from "../../components/Staffsidebar";
import Swal from "sweetalert2";
import {
  getMyOrderApi,
  updateDeliveryStatusApi,
  updatePaymentStatusApi,
} from "../../services/allApi";
import { toast } from "react-toastify";

function Myorders() {
  const [orders, setOrders] = useState([]);
  const [loading,setLoading]= useState(true)

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchMyOrder = async () => {
    setLoading(true)
    const result = await getMyOrderApi(reqHeader);
    setOrders(result.data);
    console.log(result.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  const handleStatusChange = async (id, currentStatus) => {
    const nextStatusMap = {
      processing: "out for delivery",
      "out for delivery": "delivered",
    };
    const nextStatus = nextStatusMap[currentStatus];

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: `Mark order as '${nextStatus}'?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (confirm.isConfirmed) {
      try {
        const reqBody = { deliveryStatus: nextStatus };
        await updateDeliveryStatusApi(id, reqBody, reqHeader);
        setOrders((prev) =>
          prev.map((order) =>
            order._id === id ? { ...order, deliveryStatus: nextStatus } : order
          )
        );
        if (nextStatus === "delivered") {
          Swal.fire({
            title: "Order Delivered 🎉",
            text: "You have successfully delivered the order.",
            icon: "success",
            confirmButtonText: "OK",
          });
          fetchMyOrder();
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Failed to update delivery status.",
          icon: "error",
        });
      }
    }
  };

  const handlePaymentChange = async (id) => {
    const confirm = await Swal.fire({
      title: "Confirm Payment?",
      text: "Mark this order as paid by card?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    });

    if (confirm.isConfirmed) {
      const reqBody = {
        paymentStatus: "card",
      };
      await updatePaymentStatusApi(id, reqBody, reqHeader);
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, paymentStatus: "card" } : order
        )
      );
      fetchMyOrder();
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "processing":
        return "bg-warning text-dark";
      case "out for delivery":
        return "bg-primary";
      case "delivered":
        return "bg-success";
      case "cancelled":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  const getPaymentBadge = (payment) => {
    return payment === "card" ? "bg-success" : "bg-danger";
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Cancel this order?",
      text: "Are you sure the delivery is being cancelled?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
    });

    if (confirm.isConfirmed) {
      const reqBody = { deliveryStatus: "cancelled" };
      const result = await updateDeliveryStatusApi(id, reqBody, reqHeader);
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, deliveryStatus: "cancelled" } : order
        )
      );
      if (result) {
        Swal.fire({
          title: "Order Cancelled ❌",
          text: "The order has been cancelled successfully.",
          icon: "warning",
          confirmButtonText: "OK",
        });
        fetchMyOrder();
      } else {
        toast.error("something went wrong");
      }
    }
  };

  return (
    <div className="dashboard">
      <Staffsidebar />
      <div className="content staffcontent-bg">
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
        (<div className="container py-5" style={{ minHeight: "100vh" }}>
          <h2 className="fw-bold mb-4 text-dark">📦 Claimed Orders</h2>

          {orders.length > 0 ? (
            <div className="row g-4">
              {orders.map((order) => (
                <div className="col-sm-12 col-lg-10" key={order._id}>
                  <div
                    className="card border-0 shadow h-100 p-4"
                    style={{
                      borderRadius: "1rem",
                      background:
                        "linear-gradient(to bottom right, #ffffff, #f9f9f9)",
                      borderLeft: `5px solid ${
                        order.deliveryStatus === "delivered"
                          ? "green"
                          : order.deliveryStatus === "out for delivery"
                          ? "blue"
                          : "orange"
                      }`,
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold text-primary">
                          <i className="bi bi-box-seam-fill me-2"></i> Order #{" "}
                          {order._id}
                        </h5>
                        <span
                          className={`badge ${getStatusBadge(
                            order.deliveryStatus
                          )} px-3 py-2`}
                        >
                          {order.deliveryStatus}
                        </span>
                      </div>

                      <p className="mb-1">
                        <strong>🏬 Restaurant:</strong>{" "}
                        {order.cart[0].restaurentName}
                      </p>
                      <p className="mb-1">
                        <strong>👤 Customer:</strong> {order.address.name}
                      </p>
                      <p className="mb-1">
                        <strong>📱 Phone:</strong> {order.address.phone}
                      </p>
                      <p className="mb-1 fw-semibold">📍 Address:</p>
                      <div className="row ps-3 mb-2">
                        <div className="col-md-6">
                          <span className="text-muted">🏠 House:</span>{" "}
                          {order.address?.HouseName || "N/A"}
                        </div>
                        <div className="col-md-6">
                          <span className="text-muted">🛣️ Street:</span>{" "}
                          {order.address?.street || "N/A"}
                        </div>
                        <div className="col-md-6">
                          <span className="text-muted">📍 City:</span>{" "}
                          {order.address?.city || "N/A"}
                        </div>
                        {order.address?.landMark && (
                          <div className="col-md-6">
                            <span className="text-muted">📌 LandMark:</span>{" "}
                            {order.address.landMark}
                          </div>
                        )}
                      </div>

                      <p className="mb-1">
                        <strong>🗓️ Ordered At:</strong>{" "}
                        {formatDate(order.createdAt)}
                      </p>

                      <p className="mb-2">
                        <strong>💰 Total Price:</strong> ₹
                        {order.totalPrice || 0}
                      </p>

                      <div className="mb-1">
                        <strong>🍽️ Items:</strong>
                        <ul className="ps-3">
                          {order.cart.map((item, idx) => (
                            <li key={idx}>
                              {item.quantity} x {item.productName}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">
                          Delivery Status
                        </label>
                        <div className="d-flex align-items-center gap-3">
                          {["delivered", "cancelled"].includes(
                            order.deliveryStatus
                          ) ? (
                            <span
                              className={`badge ${
                                order.deliveryStatus === "delivered"
                                  ? "bg-success"
                                  : "bg-danger"
                              }`}
                            >
                              {order.deliveryStatus.charAt(0).toUpperCase() +
                                order.deliveryStatus.slice(1)}
                            </span>
                          ) : (
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() =>
                                  handleStatusChange(
                                    order._id,
                                    order.deliveryStatus
                                  )
                                }
                              >
                                Mark as{" "}
                                {order.deliveryStatus === "processing"
                                  ? "Out for Delivery"
                                  : "Delivered"}
                              </button>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleCancel(order._id)}
                              >
                                Cancel Delivery
                              </button>
                            </div>
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
                              order.paymentStatus
                            )} px-3 py-2`}
                          >
                            {order.paymentStatus === "card"
                              ? "Paid"
                              : "Cash On Delivery"}
                          </span>
                          {order.paymentStatus === "cod" && (
                            <button
                              className="btn btn-outline-success btn-sm"
                              onClick={() => handlePaymentChange(order._id)}
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
          ) : (
            <div className="text-center text-muted mt-5 fs-5">
              No claimed orders currently.
            </div>
          )}
        </div>)}
      </div>
    </div>
  );
}

export default Myorders;
