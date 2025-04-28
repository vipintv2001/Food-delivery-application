import React from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";

function Customer() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-4 fw-bolder">Customer Details</h3>
              <div className="input-icon-wrapper">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <table className="table table-bordered table-striped table-hover text-center">
              <thead>
                <tr className="table-dark">
                  <th>Sl.No</th>
                  <th>Customer Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className="fs-5">
                <tr className="align-middle">
                  <td>1</td>
                  <td>102</td>
                  <td>Sumesh R</td>
                  <td>9433722211</td>
                  <td>Sumesh@gmail.com</td>
                </tr>
                <tr className="align-middle">
                  <td>2</td>
                  <td>103</td>
                  <td>Ramesh d</td>
                  <td>93922022211</td>
                  <td>Ramesh@gmail.com</td>
                </tr>
                <tr className="align-middle">
                  <td>3</td>
                  <td>103</td>
                  <td>Ratheesh D</td>
                  <td>8734722211</td>
                  <td>Ratheesh@gmail.com</td>
                </tr>
                <tr className="align-middle">
                  <td>4</td>
                  <td>104</td>
                  <td>Mahesh R</td>
                  <td>6433722211</td>
                  <td>Mahesh@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
