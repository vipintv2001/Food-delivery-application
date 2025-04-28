import React from "react";
import "./admin.css";
import Sidebar from "../../components/Sidebar";

function Admindashboard() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <h1>Home</h1>
        </div>
      </div>
    </>
  );
}

export default Admindashboard;
