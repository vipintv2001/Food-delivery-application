import React, { useEffect, useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import AddStaffButton from "../../components/AddStaffButton";
import { getStaffDetailsApi } from "../../services/allApi";

function Staffs() {
  const [staffDetails, setStaffDetails] = useState([]);

  useEffect(() => {
    const getStaff = async () => {
      const result = await getStaffDetailsApi();
      setStaffDetails(result.data);
      console.log(result.data);
    };
    getStaff();
  }, []);
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
            {staffDetails ? (
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
                    {staffDetails.length > 0 &&
                      staffDetails.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item._id}</td>
                          <td>{item.staffName}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td>
                            {item.workstatus === true ? (
                              <span class="badge bg-success">
                                <i class="bi bi-check-circle-fill me-1"></i>On
                                Duty
                              </span>
                            ) : (
                              <span class="badge bg-secondary">
                                <i class="bi bi-x-circle-fill me-1"></i>Off Duty
                              </span>
                            )}
                          </td>
                          <td>
                            {item.workActivity === "available" ? (
                              <span>
                                <i class="bi bi-check-lg"></i>
                                Available
                              </span>
                            ) : item.workActivity === "on a delivery" ? (
                              <span>
                                <i class="bi bi-truck me-1"></i>On a Delivery
                              </span>
                            ) : (
                              <span>
                                <i class="bi bi-dash"></i>
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No staffs found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Staffs;
