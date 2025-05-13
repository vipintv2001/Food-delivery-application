import React from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import AddStaffButton from "../../components/AddStaffButton";

function Staffs() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content content-bg">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-4 fw-bolder">Staffs Details</h3>
              <div className="input-icon-wrapper">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="mb-4 mt-3 me-4 d-flex justify-content-end">
              <AddStaffButton />
            </div>

            <div class="table-responsive">
              <table class="table table-bordered table-striped table-hover text-center align-middle">
                <thead class="table-primary text-uppercase">
                  <tr className="table-dark">
                    <th>
                      <i class="bi bi-hash"></i> Sl.No
                    </th>
                    <th>
                      <i class="bi bi-person-badge-fill"></i> Staff ID
                    </th>
                    <th>
                      <i class="bi bi-person-fill"></i> Name
                    </th>
                    <th>
                      <i class="bi bi-telephone-fill"></i> Phone
                    </th>
                    <th>
                      <i class="bi bi-envelope-fill"></i> Email
                    </th>
                    <th>
                      <i class="bi bi-activity"></i> Work Status
                    </th>
                    <th>
                      <i class="bi bi-briefcase-fill"></i> Work Activity
                    </th>
                  </tr>
                </thead>
                <tbody class="fs-5">
                  <tr>
                    <td>1</td>
                    <td>102</td>
                    <td>Sumesh R</td>
                    <td>9433722211</td>
                    <td>Sumesh@gmail.com</td>
                    <td>
                      <span class="badge bg-success">
                        <i class="bi bi-check-circle-fill me-1"></i>On Duty
                      </span>
                    </td>
                    <td>
                      <i class="bi bi-truck me-1"></i>On a Delivery
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>102</td>
                    <td>Sumesh R</td>
                    <td>9433722211</td>
                    <td>Sumesh@gmail.com</td>
                    <td>
                      <span class="badge bg-success">
                        <i class="bi bi-check-circle-fill me-1"></i>On Duty
                      </span>
                    </td>
                    <td>
                      <i class="bi bi-truck me-1"></i>On a Delivery
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>103</td>
                    <td>Ramesh D</td>
                    <td>93922022211</td>
                    <td>Ramesh@gmail.com</td>
                    <td>
                      <span class="badge bg-success">
                        <i class="bi bi-check-circle-fill me-1"></i>On Duty
                      </span>
                    </td>
                    <td>
                      <i class="bi bi-check-lg me-1"></i>Available
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>103</td>
                    <td>Ratheesh D</td>
                    <td>8734722211</td>
                    <td>Ratheesh@gmail.com</td>
                    <td>
                      <span class="badge bg-secondary">
                        <i class="bi bi-x-circle-fill me-1"></i>Off Duty
                      </span>
                    </td>
                    <td>
                      <i class="bi bi-dash-lg me-1"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>104</td>
                    <td>Mahesh R</td>
                    <td>6433722211</td>
                    <td>Mahesh@gmail.com</td>
                    <td>
                      <span class="badge bg-secondary">
                        <i class="bi bi-x-circle-fill me-1"></i>Off Duty
                      </span>
                    </td>
                    <td>
                      <i class="bi bi-dash-lg me-1"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staffs;
