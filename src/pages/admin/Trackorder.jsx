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
      <div className="content content-bg">
        <div className="container-fluid">
          <div className="container mt-5">
            <h3 className="text-center fw-bolder mb-4">ORDERS</h3>
            <div>
              <h4 className="text-center fw-bold mb-4">
                <i className="bi bi-receipt-cutoff me-2"></i>Live Orders
              </h4>

              <div className="table-responsive">
                <table className="table table-bordered table-hover text-center align-middle fs-6">
                  <thead className="table-dark">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Restaurent</th>
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
                      <td>116</td>
                      <td>12-04-2025 08:25</td>
                      <td>Sean J</td>
                      <td>Delight Hotel</td>
                      <td>
                        <div
                          data-bs-toggle="tooltip"
                          title="2x Meal"
                          style={{
                            fontSize: "1.2rem",
                            padding: "10px 15px",
                            maxWidth: "300px",
                          }}
                        >
                          <i className="bi bi-info-circle me-1 text-primary"></i>
                          2 items
                        </div>
                      </td>
                      <td>₹230</td>
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
                        <span className="badge bg-info">Processing</span>
                      </td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <i class="bi bi-exclamation-triangle me-1"></i>Not Taken
                      </td>
                    </tr>
                    <tr>
                      <td>113</td>
                      <td>12-04-2025 07:23</td>
                      <td>John D</td>
                      <td>Rahmaniya</td>
                      <td>
                        <div
                          data-bs-toggle="tooltip"
                          title="1x Chicken Biriyani"
                          style={{
                            fontSize: "1.2rem",
                            padding: "10px 15px",
                            maxWidth: "300px",
                          }}
                        >
                          <i className="bi bi-info-circle me-1 text-primary"></i>
                          1 items
                        </div>
                      </td>
                      <td>₹160</td>
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
                        <span className="badge bg-warning">
                          Out For Delivery
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Kumar
                      </td>
                    </tr>
                    <tr>
                      <td>112</td>
                      <td>12-04-2025 07:12</td>
                      <td>Suresh D</td>
                      <td>Delight Hotel</td>
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
                        <span className="badge bg-warning">
                          Out For Delivery
                        </span>
                      </td>
                      <td>
                        <span className="badge bg-primary">
                          Cash on Delivery
                        </span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Sumesh M
                      </td>
                    </tr>
                    <tr>
                      <td>112</td>
                      <td>12-04-2025 07:12</td>
                      <td>Suresh D</td>
                      <td>Oryx Village</td>
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
                        <span className="badge bg-info">Processing</span>
                      </td>
                      <td>
                        <span className="badge bg-primary">
                          Cash on Delivery
                        </span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Jadhav M
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="text-center fw-bold mt-5 mb-4">
                <i className="bi bi-clock-history me-2"></i>Previous Orders
              </h5>

              <div className="table-responsive">
                <table className="table table-bordered table-hover text-center align-middle fs-6">
                  <thead className="table-secondary">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Restaurent</th>
                      <th>Product Price</th>
                      <th>Payment</th>
                      <th>Delivery Status</th>
                      <th>Delivery Boy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>108</td>
                      <td>12-04-2025</td>
                      <td>John </td>
                      <td>Delight Hotel</td>
                      <td>₹7343</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <span className="badge bg-primary">Delivered</span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Sumesh M
                      </td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>03/04/2025</td>
                      <td>Sean</td>
                      <td>Sree Hotel</td>
                      <td>₹343</td>
                      <td>
                        <span className="badge bg-success">Paid</span>
                      </td>
                      <td>
                        <span className="badge bg-primary">Delivered</span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Raj
                      </td>
                    </tr>
                    <tr>
                      <td>93</td>
                      <td>23/03/2025</td>
                      <td>Dean</td>
                      <td>Delight Hotel</td>
                      <td>₹313</td>
                      <td>
                        <span className="badge bg-danger">Not Paid</span>
                      </td>
                      <td>
                        <span className="badge bg-danger">Cancelled</span>
                      </td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Jadhav
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
