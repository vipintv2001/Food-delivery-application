import React, { useEffect, useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";

function Trackorder() {
  const [status, setStatus] = useState("processing");

  const setBgColor = (status) => {
    switch (status) {
      case "processing":
        return "yellow";
      case "out_for_delivery":
        return "#1e5a66";
      case "delivered":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "grey";
    }
  };

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
      <div className="content">
        <div className="container-fluid">
          <div className="container mt-5">
            <h3 className="text-center fw-bolder mb-4">ORDERS</h3>
            <div>
              <h4 className="text-center fw-bold mb-4">
                <i className="bi bi-receipt-cutoff me-2"></i>Live Orders
              </h4>

              {/* Responsive Table for Live Orders */}
              <div className="table-responsive">
                <table className="table table-bordered table-hover text-center align-middle fs-6">
                  <thead className="table-dark">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Food Items</th>
                      <th>Total</th>
                      <th>Address</th>
                      <th>Delivery Status</th>
                      <th>Payment</th>
                      <th>Delivery Boy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>112</td>
                      <td>12-04-2025 07:12</td>
                      <td>Suresh D</td>
                      <td>
                        <div
                          data-bs-toggle="tooltip"
                          title="1x Cheese Burger, 2x Alfarm, 2x Chicken Shawarma, 1x Mayonnaise"
                          style={{
                            fontSize: "1.2rem",
                            padding: "10px 15px",
                            maxWidth: "300px",
                          }}
                        >
                          <i className="bi bi-info-circle me-1 text-primary"></i>
                          6 items
                        </div>
                      </td>
                      <td>₹1024</td>
                      <td style={{ maxWidth: "200px" }}>
                        <div
                          className="text-truncate"
                          data-bs-toggle="tooltip"
                          title="Flat No.231, Bogan Villa, Kakkanad, Kochi, Near TechnoPark"
                        >
                          Flat No.231, Bogan Villa...
                        </div>
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          style={{
                            backgroundColor: setBgColor(status),
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          <option value="processing">Processing</option>
                          <option value="out_for_delivery">
                            Out For Delivery
                          </option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Sumesh M
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="text-center fw-bold mt-5 mb-4">
                <i className="bi bi-clock-history me-2"></i>Previous Orders
              </h5>

              {/* Responsive Table for Previous Orders */}
              <div className="table-responsive">
                <table className="table table-bordered table-hover text-center align-middle fs-6">
                  <thead className="table-secondary">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Product Price</th>
                      <th>Payment</th>
                      <th>Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>108</td>
                      <td>12/04/2025</td>
                      <td>₹7343</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <span className="badge bg-primary">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>03/04/2025</td>
                      <td>₹343</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <span className="badge bg-primary">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <td>93</td>
                      <td>23/03/2025</td>
                      <td>₹313</td>
                      <td>
                        <span className="badge bg-danger">Not Paid</span>
                      </td>
                      <td>
                        <span className="badge bg-danger">Cancelled</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trackorder;
