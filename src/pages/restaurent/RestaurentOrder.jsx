import React, { useEffect, useState } from "react";
import "../admin/Admin.css";
import RestaurentSidebar from "../../components/RestaurentSidebar";

function Trackorder() {
  const [complete, setComplete] = useState(false);

  const handleStatus = () => setComplete(!complete);

  return (
    <div className="dashboard">
      <RestaurentSidebar />
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
                      <th>Food Items</th>
                      <th>Total</th>
                      <th>Delivery Boy</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>116</td>
                      <td>12-04-2025 08:25</td>
                      <td>Sean J</td>

                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        <div>
                          1× <span className="fw-semibold">Cheese Burger</span>
                        </div>
                        <div>
                          2× <span className="fw-semibold">Alfarm</span>
                        </div>
                        <div>
                          2×{" "}
                          <span className="fw-semibold">Chicken Shawarma</span>
                        </div>
                        <div>
                          1× <span className="fw-semibold">Mayonnaise</span>
                        </div>
                      </td>

                      <td>₹230</td>

                      <td>
                        <i class="bi bi-exclamation-triangle me-1"></i>Not Taken
                      </td>
                      <td>
                        {!complete ? (
                          <button
                            className="btn btn-primary btn-sm rounded"
                            onClick={handleStatus}
                          >
                            Mark As Complete
                          </button>
                        ) : (
                          <button className="btn btn-success btn-sm rounded">
                            Completed
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>113</td>
                      <td>12-04-2025 07:23</td>
                      <td>John D</td>
                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        <div>
                          1× <span className="fw-semibold">Cheese Burger</span>
                        </div>
                        <div>
                          5× <span className="fw-semibold">Idli Sambar</span>
                        </div>
                      </td>
                      <td>₹160</td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Kumar
                      </td>
                      <td>
                        {!complete ? (
                          <button
                            className="btn btn-primary btn-sm rounded"
                            onClick={handleStatus}
                          >
                            Mark As Complete
                          </button>
                        ) : (
                          <button className="btn btn-success btn-sm rounded">
                            Completed
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>112</td>
                      <td>12-04-2025 07:12</td>
                      <td>Suresh D</td>
                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        <div>
                          1× <span className="fw-semibold">Alfarm Manthi</span>
                        </div>
                      </td>
                      <td>₹480</td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Sumesh M
                      </td>
                      <td>
                        {!complete ? (
                          <button
                            className="btn btn-primary btn-sm rounded"
                            onClick={handleStatus}
                          >
                            Mark As Complete
                          </button>
                        ) : (
                          <button className="btn btn-success btn-sm rounded">
                            Completed
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>112</td>
                      <td>12-04-2025 07:12</td>
                      <td>Suresh D</td>

                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        {" "}
                        <div>
                          2×{" "}
                          <span className="fw-semibold">Chicken Shawarma</span>
                        </div>
                      </td>
                      <td>₹640</td>
                      <td>
                        <i className="bi bi-person-fill-check me-1 text-success"></i>
                        Jadhav M
                      </td>
                      <td>
                        {!complete ? (
                          <button
                            className="btn btn-primary btn-sm rounded"
                            onClick={handleStatus}
                          >
                            Mark As Complete
                          </button>
                        ) : (
                          <button className="btn btn-success btn-sm rounded">
                            Completed
                          </button>
                        )}
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
                      <th>Product Price</th>
                      <th>Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>108</td>
                      <td>12-04-2025</td>
                      <td>John </td>
                      <td>₹7343</td>
                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        <div>
                          1× <span className="fw-semibold">Alfarm Manthi</span>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>03/04/2025</td>
                      <td>Sean</td>
                      <td>₹343</td>
                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        <div>
                          1× <span className="fw-semibold">Alfarm Manthi</span>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>93</td>
                      <td>23/03/2025</td>
                      <td>Dean</td>
                      <td>₹313</td>
                      <td
                        style={{
                          textAlign: "center",
                          fontSize: "0.95rem",
                          lineHeight: "1.4",
                        }}
                      >
                        <div>
                          1× <span className="fw-semibold">Alfarm Manthi</span>
                        </div>
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
