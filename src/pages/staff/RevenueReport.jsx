import React, { useEffect, useState } from "react";
// import { getStaffEarningsReportApi } from "../../services/allApi"; // Your API
import { Button, Table, Spinner } from "react-bootstrap";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Staffsidebar from "../../components/Staffsidebar";
import { getAllOrderApi, getMyOrderApi } from "../../services/allApi";

function StaffEarningsReport() {
  const [reportData, setReportData] = useState([]);
  const [name, setName] = useState("");
  const [ordersToday, setOrdersToday] = useState([]);
  const [ordersWeekly, setOrdersWeekly] = useState([]);

  const dailyEarnings = ordersToday.reduce(
    (sum, curr) => sum + curr.deliveryCharge * 0.7,
    0
  );

  const weeklyEarnings = ordersWeekly.reduce(
    (sum, curr) => sum + curr.deliveryCharge * 0.7,
    0
  );

  const deliveries = ordersWeekly && ordersWeekly.length;

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    if (name) {
      fetchReport();
    }
  }, [name]);

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem("existingUser"));
    if (stored) {
      setName(stored.staffName);
    }
  }, []);

  const fetchReport = async () => {
    try {
      const result = await getAllOrderApi(reqHeader);
      const finalResult = result.data;
      const staffOrders = finalResult.filter(
        (order) => order.deliveryBoy === name
      );
      setReportData(staffOrders);
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
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday
    endOfWeek.setHours(23, 59, 59, 999);

    const weeklyOrders = deliveredOrders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= startOfWeek && orderDate <= endOfWeek;
    });
    setOrdersWeekly(weeklyOrders);
  }, [reportData]);

  return (
    <div className="dashboard">
      <Staffsidebar />
      <div className="content staffcontent-bg">
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
            <div className="mt-4">
              <p className="text-center fs-4 fw-bolder">Weekly Report</p>
            </div>
            {ordersWeekly.length > 0 ? (
              <>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Delivery Charge</th>
                        <th>Your Share</th>
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
                          <td>₹{order.deliveryCharge}</td>
                          <td>₹{(order.deliveryCharge * 0.7).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </>
            ) : (
              <p className="fs-6 text-center mt-4">
                NO Orders Completed This Week
              </p>
            )}
          </div>
        ) : (
          <P>Loading data</P>
        )}
      </div>
    </div>
  );
}

export default StaffEarningsReport;
