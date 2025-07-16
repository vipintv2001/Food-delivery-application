import React, { useEffect, useState } from "react";
// import { getStaffEarningsReportApi } from "../../services/allApi"; // Your API
import { Button, Table } from "react-bootstrap";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Staffsidebar from "../../components/Staffsidebar";
import { getAllOrderApi, getMyOrderApi } from "../../services/allApi";
import Sidebar from "../../components/Sidebar";
import AdminReport from "./AdminReport";

function AdminRevenue() {
  const [reportData, setReportData] = useState([]);
  const [ordersToday, setOrdersToday] = useState([]);
  const [ordersWeekly, setOrdersWeekly] = useState([]);
  const [loading,setLoading]=useState(true)

  const dailyEarnings = ordersToday.reduce((sum, curr) => {
    const basePrice = curr.cartSummary[0].subTotal - curr.cartSummary[0].gst;
    const productShare = basePrice * 0.15;
    const deliveryShare = curr.deliveryCharge * 0.3;
    const profit = productShare + deliveryShare;
    return sum + profit;
  }, 0);

  const weeklyEarnings = ordersWeekly.reduce((sum, curr) => {
    const basePrice = curr.cartSummary[0].subTotal - curr.cartSummary[0].gst;
    const productShare = basePrice * 0.15;
    const deliveryShare = curr.deliveryCharge * 0.3;
    const profit = productShare + deliveryShare;
    return sum + profit;
  }, 0);

  const deliveries = reportData && ordersWeekly.length;

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    setLoading(true)
    try {
      const result = await getAllOrderApi(reqHeader);
      setReportData(result.data);
      setLoading(false)
    } catch (err) {
      console.error("Failed to fetch earnings report", err);
    }
  };

  useEffect(() => {
    if (!reportData.length) return;
    const deliveredOrders = reportData.filter(
      (order) => order.deliveryStatus === "delivered"
    );
    const currentDayOrders = deliveredOrders.filter((order) => {
      const orderDate = new Date(order.createdAt).toISOString().split("T")[0];
      const todayDate = new Date().toISOString().split("T")[0];
      return orderDate === todayDate;
    });
   
    setOrdersToday(currentDayOrders);

    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const weeklyOrders = deliveredOrders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= startOfWeek && orderDate <= endOfWeek;
    });
    
    setOrdersWeekly(weeklyOrders);
  }, [reportData]);


  return (
    <div className="dashboard">
      <Sidebar />
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
          ) : (<div>
          {reportData ? (
            <div className="container py-4">
              <h2 className="fw-bold mb-4">Earnings Report</h2>

              <div className="row g-4 mb-4">
                <div className="col-md-4">
                  <div className="card text-white bg-success shadow">
                    <div className="card-body">
                      <h5 className="card-title">Daily Earnings</h5>
                      <h3>₹{dailyEarnings.toFixed(2)}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-primary shadow">
                    <div className="card-body">
                      <h5 className="card-title">Weekly Earnings</h5>
                      <h3>₹{weeklyEarnings.toFixed(2)}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-dark shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                        Deliveries Completed This Week
                      </h5>
                      <h3>{deliveries}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <AdminReport currentDayOrder={ordersToday} />

              <div className="mt-4">
                <p className="text-center fs-4 fw-bolder">Orders This Week</p>
              </div>

              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Total Price</th>
                      <th>GST</th>
                      <th>Base Price</th>
                      <th>Delivery Charge</th>
                      <th>Product Share (15%)</th>
                      <th>Delivery Share(30%)</th>
                      <th>Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersWeekly.map((order, index) => (
                      <tr key={order._id}>
                        <td>{index + 1}</td>
                        <td>{order._id.slice(-4)}</td>
                        <td>
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td>{order.cartSummary[0].subTotal}</td>
                        <td>₹{order.cartSummary[0].gst}</td>
                        <td>
                          ₹
                          {order.cartSummary[0].subTotal -
                            order.cartSummary[0].gst}
                        </td>
                        <td>{order.deliveryCharge}</td>
                        <td>
                          {(
                            (order.cartSummary[0].subTotal -
                              order.cartSummary[0].gst) *
                            0.15
                          ).toFixed(2)}
                        </td>
                        <td>{(order.deliveryCharge * 0.3).toFixed(2)}</td>
                        <td>
                          {(
                            (order.cartSummary[0].subTotal -
                              order.cartSummary[0].gst) *
                              0.15 +
                            order.deliveryCharge * 0.3
                          ).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          ) : (
            <P>Loading data</P>
          )}
        </div>)}
      </div>
    </div>
  );
}

export default AdminRevenue;
