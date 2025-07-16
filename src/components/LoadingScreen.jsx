import React from "react";

function LoadingScreen() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex justify-content-center align-items-center"
      style={{ zIndex: 1050 }}
    >
      <div className="text-center">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 fw-semibold text-muted">Loading, please wait...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
