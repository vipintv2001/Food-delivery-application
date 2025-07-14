import React, { useEffect, useState } from "react";
import RestaurentSidebar from "../../components/RestaurentSidebar";
import { getRestaurentOrderDetailsApi } from "../../services/allApi";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import RestaurentReport from "./RestaurentReport";

function RestaurentDashboard() {
  const [restaurentName, setRestaurentName] = useState("");
  const [orders, setOrders] = useState(0);
  const [todaysOrder, setTodayOrder] = useState([]);
  const [ongoingOrders, setOngoingOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);
  const [todaysRevenue, setTodaysRevenue] = useState(0);
  const token = sessionStorage.getItem("token");

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setRestaurentName(
        JSON.parse(sessionStorage.getItem("existingUser")).restaurentName
      );
    }
  });

  const getDetails = async () => {
    const restaurentOrders = await getRestaurentOrderDetailsApi(reqHeader);
    const currentDayOrders = restaurentOrders.data.filter((order) => {
      const orderDate = new Date(order.createdAt).toISOString().split("T")[0];
      const todayDate = new Date().toISOString().split("T")[0];
      return orderDate === todayDate;
    });
    setOrders(currentDayOrders.length);
    setTodayOrder(currentDayOrders);
    console.log("todays order", currentDayOrders);
    const liveOrders = restaurentOrders.data.filter(
      (order) =>
        order.deliveryStatus !== "delivered" &&
        order.deliveryStatus !== "cancelled"
    ).length;
    setOngoingOrders(liveOrders);
    const deliveredOrders = currentDayOrders.length - liveOrders;
    setCompletedOrders(deliveredOrders);

    const paidOrders = currentDayOrders.filter(
      (orders) => orders.paymentStatus === "card"
    );
    const totalRevenue = paidOrders
      ? paidOrders.reduce((acc, curr) => {
          return acc + curr.cartSummary[0].subTotal;
        }, 0)
      : 0;
    setTodaysRevenue(totalRevenue);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div className="dashboard">
        <RestaurentSidebar />
        <div className="content staffcontent-bg">
          <div
            className="container-fluid p-4"
            style={{
              minHeight: "100vh",
            }}
          >
            <div className="mb-4">
              <h2 className="fw-bold text-dark">Welcome, {restaurentName}</h2>
              <p className="text-muted">
                Here's a quick snapshot of today's activity at your restaurant.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="card-title text-primary">
                        Total Orders Today
                      </h6>
                      <i className="bi bi-receipt fs-4 text-primary"></i>
                    </div>
                    <h2 className="fw-bold text-dark">{orders}</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="card-title text-warning">
                        Ongoing Orders
                      </h6>
                      <i className="bi bi-hourglass-split fs-4 text-warning"></i>
                    </div>
                    <h2 className="fw-bold text-dark">{ongoingOrders}</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="card-title text-success">
                        Completed Orders
                      </h6>
                      <i className="bi bi-check-circle-fill fs-4 text-success"></i>
                    </div>
                    <h2 className="fw-bold text-dark">{completedOrders}</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="card-title text-info">Total Price</h6>
                      <i className="bi bi-currency-rupee fs-4 text-info"></i>
                    </div>
                    <h2 className="fw-bold text-dark">₹{todaysRevenue}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurentDashboard;
