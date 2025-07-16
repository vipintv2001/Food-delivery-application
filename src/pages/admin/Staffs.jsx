import React, { useEffect, useState } from "react";
// import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import AddStaffButton from "../../components/AddStaffButton";
import { getStaffDetailsApi } from "../../services/allApi";

function Staffs() {
  const [staffDetails, setStaffDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const getStaff = async () => {
      setLoading(true)
      const result = await getStaffDetailsApi(searchTerm);
      setStaffDetails(result?.data || []);
      console.log(result.data);
      setLoading(false)
    };
    getStaff();
  }, [searchTerm]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content content-bg">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "300px" }}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 fw-semibold text-muted">
              Loading, please wait...
            </p>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-4 fw-bolder">Staffs Details</h3>
              <div className="input-icon-wrapper">
                <i className="fa-solid fa-magnifying-glass icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4 mt-3 me-4 d-flex justify-content-end">
              <AddStaffButton />
            </div>

            {staffDetails.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover text-center align-middle">
                  <thead className="table-primary text-uppercase">
                    <tr className="table-dark">
                      <th>
                        <i className="bi bi-hash"></i> Sl.No
                      </th>
                      <th>
                        <i className="bi bi-person-badge-fill"></i> Staff ID
                      </th>
                      <th>
                        <i className="bi bi-person-fill"></i> Name
                      </th>
                      <th>
                        <i className="bi bi-telephone-fill"></i> Phone
                      </th>
                      <th>
                        <i className="bi bi-envelope-fill"></i> Email
                      </th>
                      <th>
                        <i className="bi bi-activity"></i> Work Status
                      </th>
                      <th>
                        <i className="bi bi-briefcase-fill"></i> Work Activity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-5">
                    {staffDetails.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item._id.slice(-6)}</td>
                        <td>{item.staffName}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>
                          {item.workstatus ? (
                            <span className="badge bg-success">
                              <i className="bi bi-check-circle-fill me-1"></i>On
                              Duty
                            </span>
                          ) : (
                            <span className="badge bg-secondary">
                              <i className="bi bi-x-circle-fill me-1"></i>Off
                              Duty
                            </span>
                          )}
                        </td>
                        <td>
                          {item.workActivity === "available" ? (
                            <span>
                              <i className="bi bi-check-lg"></i> Available
                            </span>
                          ) : item.workActivity === "on a delivery" ? (
                            <span>
                              <i className="bi bi-truck me-1"></i>On a Delivery
                            </span>
                          ) : (
                            <span>
                              <i className="bi bi-dash"></i>
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
        )}
      </div>
    </div>
  );
}

export default Staffs;
