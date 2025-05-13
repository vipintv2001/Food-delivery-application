import React, { useEffect, useState } from "react";
import Staffsidebar from "../../components/Staffsidebar";

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 101,
      customer: "John Doe",
      address: "Flat No.231, Bogan Villa, Kakkanad, Kochi, Near TechnoPark",
      items: 3,
      restaurant: "Delight",
    },
    {
      id: 102,
      customer: "Priya K.",
      address: "22, Palm Heights, Aluva, Ernakulam",
      items: 2,
      restaurant: "Oryx Village",
    },
    {
      id: 103,
      customer: "Ahmed A.",
      address: "9 Rose Garden, Kalamassery, Kochi",
      items: 4,
      restaurant: "Rahmaniya",
    },
  ]);

  const [claimedMessage, setClaimedMessage] = useState("");

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <div className="dashboard">
      <Staffsidebar />
      <div className="content staffcontent-bg">
        <div className="container py-4" style={{ minHeight: "100vh" }}>
          <h2 className="mb-4 fw-bold text-center">Unclaimed Orders</h2>

          {claimedMessage && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              {claimedMessage}
              <button
                type="button"
                className="btn-close"
                onClick={() => setClaimedMessage("")}
              ></button>
            </div>
          )}

          {orders.length === 0 ? (
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
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="fw-semibold">#{order.id}</td>
                      <td>{order.customer}</td>
                      <td>
                        <i className="bi bi-shop me-1 text-secondary"></i>
                        {order.restaurant}
                      </td>
                      <td style={{ maxWidth: "200px" }}>
                        <div
                          className="text-truncate"
                          data-bs-toggle="tooltip"
                          title={order.address}
                        >
                          {order.address}
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-secondary">
                          {order.items} Items
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="bi bi-hand-index-thumb me-1"></i>Claim
                          Order
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
