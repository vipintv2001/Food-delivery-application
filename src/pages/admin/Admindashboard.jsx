import React, { useEffect, useState } from "react";
import "./admin.css";
import Sidebar from "../../components/Sidebar";
import {
  getAllOrderApi,
  getCustomerDetailsApi,
  getRestaurentApi,
  getStaffDetailsApi,
} from "../../services/allApi";

function Admindashboard() {
  const token = sessionStorage.getItem("token");

  const [customer, setCustomers] = useState(0);
  const [staff, setStaffs] = useState(0);
  const [restaurent, setRestaurent] = useState(0);
  const [order, setorders] = useState(0);
  const [orderToday, setOrderToday] = useState(0);
  const [currentDayRevenue, setCurrentDayRevenue] = useState(0);

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const customersData = await getCustomerDetailsApi();
        const staffsData = await getStaffDetailsApi();
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
        }).length;
        setOrderToday(todaysOrder);

        const currentDayOrders = allOrders.filter((order) => {
          const orderDate = new Date(order.createdAt)
            .toISOString()
            .split("T")[0];
          const todayDate = new Date().toISOString().split("T")[0];
          return orderDate === todayDate;
        });
        const todaysRevenue = currentDayOrders.reduce((acc, curr) => {
          return acc + curr.totalPrice;
        }, 0);
        setCurrentDayRevenue(todaysRevenue);
      } catch (error) {
        console.log("error fetching data");
      }
    };
    getDetails();
  }, []);
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content content-bg">
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

                {/* Most Ordered Item */}
                <div className="row mt-5">
                  <div className="col-md-6 col-lg-6">
                    <div className="card shadow-lg">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
                            className="img-fluid rounded-start"
                            alt="Most Ordered Food"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Most Ordered Item</h5>
                            <p className="card-text mb-1">
                              <strong>Item:</strong> Chicken Biryani
                            </p>
                            <p className="card-text">
                              <strong>Orders:</strong> 84
                            </p>
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
      </div>
    </>
  );
}

export default Admindashboard;
