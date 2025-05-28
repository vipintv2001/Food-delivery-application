import React, { useEffect, useState } from "react";
import RestaurentSidebar from "../../components/RestaurentSidebar";

function RestaurentDashboard() {
  const [restaurentName, setRestaurentName] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setRestaurentName(
        JSON.parse(sessionStorage.getItem("existingUser")).restaurentName
      );
    }
  });
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
                    <h2 className="fw-bold text-dark">48</h2>
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
                    <h2 className="fw-bold text-dark">7</h2>
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
                    <h2 className="fw-bold text-dark">39</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="card-title text-info">Revenue Today</h6>
                      <i className="bi bi-currency-rupee fs-4 text-info"></i>
                    </div>
                    <h2 className="fw-bold text-dark">₹8,450</h2>
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
