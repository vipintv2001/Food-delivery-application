import React, { useEffect, useState } from "react";
import Staffsidebar from "../../components/Staffsidebar";
import { Badge, Button, Card } from "react-bootstrap";
import "./Staff.css";

function Staffdashboard() {
  const [onDuty, setOnDuty] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(JSON.parse(sessionStorage.getItem("existingUser")).staffName);
  }, []);

  const handleToggle = () => setOnDuty(!onDuty);
  return (
    <>
      <div className="dashboard">
        <Staffsidebar />
        <div className="content staffcontent-bg">
          <div
            className="container-fluid p-4"
            style={{
              minHeight: "100vh",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="fw-bold text-dark">Welcome, {name}</h2>
                <p className="text-muted">
                  Here’s your current status and order overview.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="fw-medium me-2">On Duty</span>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="dutySwitch"
                    checked={onDuty}
                    onChange={handleToggle}
                  />
                </div>
                <span
                  className={`badge ${onDuty ? "bg-success" : "bg-danger"}`}
                >
                  {onDuty ? "Active" : "Off Duty"}
                </span>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-12">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title text-primary">Live Orders</h5>
                      <i className="bi bi-truck fs-4 text-primary"></i>
                    </div>
                    <h2 className="fw-bold text-dark">12</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title text-warning">
                        Unclaimed Orders
                      </h5>
                      <i className="bi bi-hourglass-split fs-4 text-warning"></i>
                    </div>
                    <h2 className="fw-bold text-dark">5</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title text-success">
                        Today's Deliveries
                      </h5>
                      <i className="bi bi-bag-check-fill fs-4 text-success"></i>
                    </div>
                    <h2 className="fw-bold text-dark">20</h2>
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

export default Staffdashboard;
