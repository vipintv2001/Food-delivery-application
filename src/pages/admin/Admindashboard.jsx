import React, { useEffect, useState } from "react";
import "./admin.css";
import Sidebar from "../../components/Sidebar";

function Admindashboard() {
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
                        <p className="card-text display-4">12</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-success shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Delivery Boys On Duty</h5>
                        <p className="card-text display-4">5</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-info shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Total Customers</h5>
                        <p className="card-text display-4">128</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-3">
                    <div className="card text-white bg-warning shadow-lg">
                      <div className="card-body text-center">
                        <h5 className="card-title">Total Restaurent</h5>
                        <p className="card-text display-4">12</p>
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
                          <h1>₹8230</h1>
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
                          <h1>62</h1>
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
