import React, { useEffect, useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import {
  getAllOrderApi,
  getCustomerDetailsApi,
  getRestaurentApi,
  getStaffDetailsApi,
} from "../../services/allApi";
import LoadingSpinner from "../../components/LoginSpinner";

function Admindashboard() {
  const token = sessionStorage.getItem("token");

  const [customer, setCustomers] = useState(0);
  const [staff, setStaffs] = useState(0);
  const [restaurent, setRestaurent] = useState(0);
  const [order, setorders] = useState(0);
  const [orderToday, setOrderToday] = useState(0);
  const [currentDayRevenue, setCurrentDayRevenue] = useState(0);
  const [AlltodaysOrder, setAllTodayOrder] = useState([]);
  const [loading,setLoading] = useState(true)

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true)
        const customersData = await getCustomerDetailsApi("");
        const staffsData = await getStaffDetailsApi("");
        const restaurentsData = await getRestaurentApi();
        const ordersData = await getAllOrderApi(reqHeader);
        setCustomers(customersData.data.length);
        setRestaurent(restaurentsData.data.length);
        const allStaffs = staffsData.data;
        const activeStaffs = allStaffs.filter(
          (staff) => staff.workstatus === true
        ).length;

        const allOrders = ordersData.data;
        const liveOrders = allOrders.filter(
          (order) =>
            order.deliveryStatus !== "delivered" &&
            order.deliveryStatus !== "cancelled"
        ).length;
        setStaffs(activeStaffs);
        setorders(liveOrders);

        const todaysOrder = allOrders.filter((order) => {
          const orderDate = new Date(order.createdAt)
            .toISOString()
            .split("T")[0];
          const todayDate = new Date().toISOString().split("T")[0];
          return orderDate === todayDate;
        });
        const validOrders = todaysOrder.filter(
          (order) => order.deliveryStatus !== "cancelled"
        );

        setOrderToday(validOrders.length);
        setAllTodayOrder(validOrders);

        const todaysRevenue = validOrders.reduce((acc, curr) => {
          return acc + curr.totalPrice;
        }, 0);
        setCurrentDayRevenue(todaysRevenue);
        setLoading(false)
      } catch (error) {
        console.log("error fetching data");
        setLoading(false)
      }
    };
    getDetails();
  }, []);

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content content-bg">
          {loading && <LoadingSpinner />}
          <div className="container-fluid p-4 min-vh-100">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-4">Admin Dashboard</h2>

                <div className="row g-4 mb-4">
                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-primary shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Live Orders</h5>
                        <p className="card-text display-4">{order}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-success shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Delivery Boys On Duty</h5>
                        <p className="card-text display-4">{staff}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-info shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Total Customers</h5>
                        <p className="card-text display-4">{customer}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-warning shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Total Restaurent</h5>
                        <p className="card-text display-4">{restaurent}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-md-6 col-lg-6">
                    {/* Example Chart Section */}
                    <div className="card shadow-lg">
                      <div className="card-body">
                        <h5 className="card-title">Revenue Overview</h5>
                        <div className="card-text">
                          <p>Total Revenue Today:</p>
                          <h1>₹{currentDayRevenue}</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6">
                    {/* Example Chart Section */}
                    <div className="card shadow-lg">
                      <div className="card-body">
                        <h5 className="card-title">Orders Per Day</h5>
                        <div className="card-text">
                          <p>Toatl Orders Today:</p>
                          <h1>{orderToday}</h1>
                        </div>
                      </div>
                    </div>
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

export default Admindashboard;
