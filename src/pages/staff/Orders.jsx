import React, { useEffect, useState } from "react";
import Staffsidebar from "../../components/Staffsidebar";
import { claimOrderApi, getAllOrderApi } from "../../services/allApi";
import { toast } from "react-toastify";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [onDuty,setOnDuty] = useState(false)

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  useEffect(() => {
      const stored = JSON.parse(sessionStorage.getItem("existingUser"));
      if (stored) {
        setOnDuty(stored.workstatus);
      }
    }, []);

  const token = sessionStorage.getItem("token");

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const getOrderDetails = async () => {
    const orders = await getAllOrderApi(reqHeader);
    console.log("orderDetails:", orders.data);
    setOrders(orders.data);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    getOrderDetails();
  }, []);

  const handleClaimOrder = async (id) => {
    if (onDuty) {
      const result = await claimOrderApi(id, reqHeader);
      console.log(result.data);
      if (result.status === 201) {
        toast.success("succesfully claimed the order");
        getOrderDetails()
      } else {
        toast.error("something went wrong");
      }
    } else {
      toast.warning("orders can claimed only when onDuty");
    }
  };

  return (
    <div className="dashboard">
      <Staffsidebar />
      <div className="content staffcontent-bg">
        <div className="container py-4" style={{ minHeight: "100vh" }}>
          <h2 className="mb-4 fw-bold text-center">Unclaimed Orders</h2>

          {orders.filter(
            (order) =>
              !order.deliveryBoy && order.deliveryStatus !== "cancelled"
          ).length === 0 ? (
            <div className="text-center text-muted mt-5 fs-5">
              No unclaimed orders available.
            </div>
          ) : (
            <div className="table-responsive shadow-sm rounded bg-white">
              <table className="table table-bordered table-hover align-middle mb-0 fs-6 text-center">
                <thead className="table-dark">
                  <tr>
                    <th># Order ID</th>
                    <th>Customer</th>
                    <th>Restaurant</th>
                    <th>Address</th>
                    <th>Items</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .filter(
                      (order) =>
                        !order.deliveryBoy &&
                        order.deliveryStatus !== "cancelled"
                    )
                    .map((order) => (
                      <tr key={order._id}>
                        <td className="fw-semibold">#{order._id}</td>
                        <td>{order.address?.name || "NA"}</td>
                        <td>
                          <i className="bi bi-shop me-1 text-secondary"></i>
                          {order.cart[0]?.restaurentName || "NA"}
                        </td>
                        <td style={{ maxWidth: "200px" }}>
                          <div
                            className="text-truncate"
                            data-bs-toggle="tooltip"
                            title={`${order.address?.name || ""}, ${
                              order.address?.HouseName || ""
                            }, ${order.address?.street || ""}, ${
                              order.address?.postOffice || ""
                            }, ${order.address?.city || ""}, ${
                              order.address?.landMark || ""
                            }, ${order.address?.pinCode || ""}, Ph: ${
                              order.address?.phone || ""
                            }`}
                          >
                            {[
                              order.address?.HouseName,
                              order.address?.street,
                              order.address?.city,
                            ]
                              .filter(Boolean)
                              .join(", ")}
                            ...
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-secondary">
                            {order.cart.length} Items
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => handleClaimOrder(order._id)}
                          >
                            <i className="bi bi-hand-index-thumb me-1"></i>
                            Claim Order
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
