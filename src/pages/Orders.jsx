import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUserOrderDetailsApi } from "../services/allApi";

function Orders() {
  const [orderDetails, setOrderDeatails] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const getOrderDetails = async () => {
      const orders = await getUserOrderDetailsApi(reqHeader);
      console.log("orderDetails:", orders.data);
      setOrderDeatails(orders.data);
    };
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
    <>
      <div className="container-fluid bg-light min-vh-100 py-5">
        <Header />
        {orderDetails ? (
          <div className="container" style={{ marginTop: "120px" }}>
            <h3 className="text-center fw-bolder mb-4 text-primary">
              My Orders
            </h3>

            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <h5 className="fw-bold mb-4">Current Order</h5>
                <table className="table table-striped table-hover text-center fs-5">
                  <thead>
                    <tr>
                      <th>Order Id</th>
                      <th>Date</th>
                      <th>Products</th>
                      <th>Product Price</th>
                      <th>Payment Status</th>
                      <th>Delivery Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.length > 0 ? (
                      orderDetails.map((item) => (
                        <tr>
                          <td>112</td>
                          <td>{item.createdAt}</td>
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
                          <td>
                            ₹{item.totalPrice}
                          </td>
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
                            <button className="btn btn-danger">
                              Cancel Order
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>No items found</p>
                    )}
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
                      <th>Products</th>
                      <th>Product Price</th>
                      <th>Payment Status</th>
                      <th>Delivery Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>108</td>
                      <td>12/04/2025</td>
                      <td>
                        <div
                          data-bs-toggle="tooltip"
                          title="2 x Alfarm"
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
                      <td>
                        <div
                          data-bs-toggle="tooltip"
                          title="2 x Alfarm"
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
                      <td>
                        <div
                          data-bs-toggle="tooltip"
                          title="2 x Alfarm"
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
        ) : (
          <p>NO Order History</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Orders;
