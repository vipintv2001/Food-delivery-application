import React, { useEffect, useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import { getCustomerDetailsApi } from "../../services/allApi";

function Customer() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [searchTerm,setSearchTerm]= useState("")
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const getCustomer = async () => {
      setLoading(true)
      const result = await getCustomerDetailsApi(searchTerm);
      setCustomerDetails(result?.data || []);
      console.log("customer", result.data);
      setLoading(false)
    };
    getCustomer();
  }, [searchTerm]);
  return (
    <>
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
                <h3 className="my-4 fw-bolder">Customer Details</h3>
                <div className="input-icon-wrapper">
                  <i class="fa-solid fa-magnifying-glass icon"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <table className="table table-bordered table-striped table-hover text-center">
                <thead>
                  <tr className="table-dark">
                    <th>
                      <i class="bi bi-hash me-1"></i> Sl.No
                    </th>
                    <th>
                      <i class="bi bi-person-badge-fill me-2"></i>Customer Id
                    </th>
                    <th>
                      <i class="bi bi-person-fill me-2"></i>Name
                    </th>
                    <th>
                      <i class="bi bi-telephone-fill me-2"></i>Phone Number
                    </th>
                    <th>
                      <i class="bi bi-envelope-fill me-2"></i>Email
                    </th>
                  </tr>
                </thead>
                <tbody className="fs-5">
                  {customerDetails &&
                    customerDetails.map((item, index) => (
                      <tr className="align-middle">
                        <td>{index + 1}</td>
                        <td>{item._id.slice(-4)}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Customer;
