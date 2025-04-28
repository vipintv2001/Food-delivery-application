import React from "react";
import Header from "../components/Header";

function Orders() {
  return (
    <>
      <div className="container-fluid bg-light min-vh-100 py-5">
        <Header />
        <div className="container" style={{ marginTop: "120px" }}>
          <h3 className="text-center fw-bolder mb-4 text-primary">My Orders</h3>

          {/* Current Order Table */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Current Order</h5>
              <table className="table table-striped table-hover text-center fs-5">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Date</th>
                    <th>Product Price</th>
                    <th>Payment Status</th>
                    <th>Delivery Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>112</td>
                    <td>16/04/2025</td>
                    <td>₹734</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Cash on Delivery
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-info text-dark">
                        Processing
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-danger">Cancel Order</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Previous Orders Table */}
          <h5 className="text-center fw-bold text-secondary mb-4">
            Previous Orders
          </h5>
          <div className="card shadow-sm">
            <div className="card-body">
              <table className="table table-striped table-hover text-center fs-5">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Date</th>
                    <th>Product Price</th>
                    <th>Payment Status</th>
                    <th>Delivery Status</th>
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
                      <span className="badge bg-success">Delivered</span>
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
                      <span className="badge bg-success">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>93</td>
                    <td>23/03/2025</td>
                    <td>₹313</td>
                    <td>
                      <span className="badge bg-danger text-white">
                        Not Paid
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-dark text-white">
                        Cancelled
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
