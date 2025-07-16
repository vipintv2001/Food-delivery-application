import React, { useEffect, useState } from "react";
import "../admin/Admin.css";
import RestaurentSidebar from "../../components/RestaurentSidebar";
import { getRestaurentOrderDetailsApi } from "../../services/allApi";

function Trackorder() {
  const [complete, setComplete] = useState(false);
  const [orderDetails, setOrderDeatails] = useState([]);
  const [loading,setLoading] = useState(true)

  const handleStatus = () => setComplete(!complete);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const getOrderDetails = async () => {
      setLoading(true)
      const orders = await getRestaurentOrderDetailsApi(reqHeader);
      console.log("orderDetails:", orders.data);
      setOrderDeatails(orders.data);
      setLoading(false)
    };
    getOrderDetails();
  }, []);

  return (
    <div className="dashboard">
      <RestaurentSidebar />
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
          ) : (<div className="container-fluid">
          <div className="container mt-5">
            <h3 className="text-center fw-bolder mb-4">ORDERS</h3>

            {/* Live Orders */}
            <h4 className="text-center fw-bold mb-4">
              <i className="bi bi-receipt-cutoff me-2"></i>Live Orders
            </h4>

            <div className="table-responsive">
              <table className="table table-bordered table-hover text-center align-middle fs-6">
                {orderDetails?.some(
                  (item) => item.deliveryStatus === "processing"
                ) && (
                  <thead className="table-dark">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Customer Name</th>
                      <th>Food Items</th>
                      <th>Total</th>
                      <th>Delivery Boy</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {orderDetails?.filter(
                    (item) => item.deliveryStatus === "processing"
                  ).length > 0 ? (
                    orderDetails
                      .filter((item) => item.deliveryStatus === "processing")
                      .map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-IN",
                              { timeZone: "Asia/Kolkata" }
                            )}
                          </td>
                          <td>
                            {new Date(item.createdAt).toLocaleTimeString(
                              "en-IN",
                              {
                                timeZone: "Asia/Kolkata",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}
                          </td>
                          <td>{item.address.name}</td>
                          <td>
                            {item.cart.map((cartItem, idx) => (
                              <div key={idx}>
                                {cartItem.quantity} x {cartItem.productName}
                              </div>
                            ))}
                          </td>
                          <td>₹{item.totalPrice}</td>
                          <td>
                            {item.deliveryBoy ? (
                              item.deliveryBoy
                            ) : (
                              <>
                                <i className="bi bi-exclamation-triangle me-1"></i>
                                Not Taken
                              </>
                            )}
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-danger fw-semibold">
                        No Live Orders
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Previous Orders */}
            <h5 className="text-center fw-bold mt-5 mb-4">
              <i className="bi bi-clock-history me-2"></i>Previous Orders
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered table-hover text-center align-middle fs-6">
                {orderDetails?.some(
                  (item) => item.deliveryStatus !== "processing"
                ) && (
                  <thead className="table-secondary">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Food Items</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {orderDetails?.filter(
                    (item) => item.deliveryStatus !== "processing"
                  ).length > 0 ? (
                    orderDetails
                      .filter((item) => item.deliveryStatus !== "processing")
                      .map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-IN",
                              { timeZone: "Asia/Kolkata" }
                            )}
                          </td>
                          <td>{item.address.name}</td>
                          <td>
                            {item.cart.map((cartItem, idx) => (
                              <div key={idx}>
                                {cartItem.quantity} x {cartItem.productName}
                              </div>
                            ))}
                          </td>
                          <td>₹{item.totalPrice}</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-secondary fw-semibold">
                        No Previous Orders
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}

export default Trackorder;
