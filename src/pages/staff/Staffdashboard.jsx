import React, { useEffect, useState } from "react";
import Staffsidebar from "../../components/Staffsidebar";
import { Badge, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Staff.css";
import { getAllOrderApi, setWorkStatusApi } from "../../services/allApi";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/LoginSpinner";

function Staffdashboard() {
  const [onDuty, setOnDuty] = useState(false);
  const [name, setName] = useState("");
  const [orders, setOrders] = useState(0);
  const [Unclaimed, setUnclaimed] = useState(0);
  const [deliverisToday, setDeliveriesToday] = useState(0);
  const [ordersToday, setordersToday] = useState([]);
  const [ordersWeekly, setOrdersWeekly] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const dailyEarnings = ordersToday.reduce(
    (sum, curr) => sum + curr.deliveryCharge * 0.7,
    0
  );

  const weeklyEarnings = ordersWeekly.reduce(
    (sum, curr) => sum + curr.deliveryCharge * 0.7,
    0
  );

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem("existingUser"));
    if (stored) {
      setName(stored.staffName);
      setOnDuty(stored.workstatus);
    }
  }, []);

  const getDetails = async () => {
    setLoading(true);
    const ordersData = await getAllOrderApi(reqHeader);
    const allOrders = ordersData.data;
    const liveOrders = allOrders.filter(
      (order) =>
        order.deliveryStatus !== "delivered" &&
        order.deliveryStatus !== "cancelled"
    );
    setOrders(liveOrders.length);

    const UnclaimedOrders = liveOrders.filter((order) => !order.deliveryBoy);
    setUnclaimed(UnclaimedOrders.length);

    const currentDayOrders = allOrders.filter((order) => {
      const orderDate = new Date(order.createdAt).toISOString().split("T")[0];
      const todayDate = new Date().toISOString().split("T")[0];
      return orderDate === todayDate;
    });
    const validCurrentDayOrder = currentDayOrders.filter(
      (order) => order.deliveryStatus !== "cancelled"
    );
    const todaysDeliveries = validCurrentDayOrder.filter(
      (order) => order.deliveryBoy === name
    );

    const staffDeliveries = allOrders.filter(
      (order) => order.deliveryBoy === name
    );
    setordersToday(todaysDeliveries);
    setDeliveriesToday(todaysDeliveries.length);

    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const weeklyOrders = staffDeliveries.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= startOfWeek && orderDate <= endOfWeek;
    });
    const validCurrentWeekOrder = weeklyOrders.filter(
      (order) => order.deliveryStatus !== "cancelled"
    );
    setOrdersWeekly(validCurrentWeekOrder);
    setLoading(false);
  };
  useEffect(() => {
    if (name) {
      getDetails();
    }
  }, [name]);
  const handleOnDuty = async () => {
    const reqBody = {
      workstatus: true,
      workActivity: "available",
    };
    const result = await setWorkStatusApi(reqBody, reqHeader);
    console.log("result", result);
    if (result.status === 201) {
      toast.success("marked As On Duty");
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      user.workstatus = true;
      sessionStorage.setItem("existingUser", JSON.stringify(user));
      setOnDuty(true);
    } else {
      toast.error("something went Wrong");
    }
  };

  const handleOffDuty = async () => {
    const reqBody = {
      workstatus: false,
      workActivity: null,
    };
    const result = await setWorkStatusApi(reqBody, reqHeader);
    console.log("result", result);
    if (result.status === 201) {
      toast.success("marked As Off Duty");
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      user.workstatus = false;
      sessionStorage.setItem("existingUser", JSON.stringify(user));
      setOnDuty(false);
    } else {
      toast.error("something went Wrong");
    }
  };

  const handleToggle = () => {
    if (!onDuty) {
      Swal.fire({
        title: "Take On Duty?",
        text: "You will be marked as available.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, I'm On Duty",
      }).then((result) => {
        if (result.isConfirmed) {
          handleOnDuty();
        }
      });
    } else {
      Swal.fire({
        title: "Go Off Duty?",
        text: "You will no longer receive orders.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Off Duty",
      }).then((result) => {
        if (result.isConfirmed) {
          handleOffDuty();
        }
      });
    }
  };

  return (
    <div className="dashboard d-flex flex-column flex-lg-row">
      <Staffsidebar />
      <div className="content staffcontent-bg w-100">
        {loading && <LoadingSpinner />}
        <div
          className="container-fluid p-3 p-md-4"
          style={{ minHeight: "100vh" }}
        >
          {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
            <div>
              <h2 className="fw-bold text-dark">Welcome, {name}</h2>
              <p className="text-muted">
                Here’s your current status and order overview.
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
              <span className="fw-medium fs-6">Attendance:</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input fs-5"
                  type="checkbox"
                  id="dutySwitch"
                  checked={onDuty}
                  onChange={handleToggle}
                />
              </div>
              <span
                className={`badge rounded-pill px-4 py-2 fw-semibold fs-6 shadow-sm ${
                  onDuty ? "bg-success text-white" : "bg-danger text-white"
                }`}
                style={{
                  minWidth: "110px",
                  textAlign: "center",
                }}
              >
                {onDuty ? "🟢 On Duty" : "🔴 Off Duty"}
              </span>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <Card className="shadow h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title text-primary">Live Orders</h5>
                    <i className="bi bi-truck fs-4 text-primary"></i>
                  </div>
                  <h2 className="fw-bold text-dark">{orders}</h2>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-lg-4">
              <Card className="shadow h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title text-warning">
                      Unclaimed Orders
                    </h5>
                    <i className="bi bi-hourglass-split fs-4 text-warning"></i>
                  </div>
                  <h2 className="fw-bold text-dark">{Unclaimed}</h2>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-lg-4">
              <Card className="shadow h-100">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title text-success">
                      Today's Deliveries
                    </h5>
                    <i className="bi bi-bag-check-fill fs-4 text-success"></i>
                  </div>
                  <h2 className="fw-bold text-dark">{deliverisToday}</h2>
                </Card.Body>
              </Card>
            </div>
            {/* Earnings Section */}
            <div className="mt-4">
              <h4 className="fw-bold text-dark mb-3">Earnings Summary</h4>
              <div className="row g-4">
                {/* Daily Earnings */}
                <div className="col-md-6 col-lg-4">
                  <Card className="shadow h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title text-info">Daily Earnings</h5>
                        <i className="bi bi-currency-rupee fs-4 text-info"></i>
                      </div>
                      <h2 className="fw-bold text-dark">
                        ₹{dailyEarnings.toFixed(2)}
                      </h2>
                    </Card.Body>
                  </Card>
                </div>

                {/* Weekly Earnings */}
                <div className="col-md-6 col-lg-4">
                  <Card className="shadow h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title text-success">
                          Weekly Earnings
                        </h5>
                        <i className="bi bi-bar-chart-line-fill fs-4 text-success"></i>
                      </div>
                      <h2 className="fw-bold text-dark">
                        ₹{weeklyEarnings.toFixed(2)}
                      </h2>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffdashboard;
