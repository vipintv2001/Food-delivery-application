import React from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import Adminfoodcard from "../../components/Adminfoodcard";

function Viewitems() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-4 fw-bolder">Food Items</h3>
              <div className="input-icon-wrapper">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
                <div className="col custom-col p-3">
                  <Adminfoodcard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewitems;
