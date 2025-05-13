import React from "react";
import "../admin/Admin.css";
import Sidebar from "../../components/Sidebar";
import RestaurentSidebar from "../../components/RestaurentSidebar";

function Additems() {
  return (
    <div className="dashboard">
      <RestaurentSidebar />
      <div className="content content-bg container-fluid">
        <h2 className="text-center fw-bold my-4">Add New Product</h2>

        <div className="d-flex justify-content-center">
          <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Product Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-basket-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Image URL</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-image-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter image link"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <select className="form-select">
                  <option selected disabled>
                    Select category
                  </option>
                  <option value="Chineese">Chineese</option>
                  <option value="indian">Indian</option>
                  <option value="italian">Italian</option>
                  <option value="North Indian">North Indian</option>
                  <option value="South Indian">South Indian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Arabian">Arabian</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Price (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter price"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Discount (%)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter discount"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success px-4 py-2 fs-6"
                >
                  <i className="bi bi-plus-circle me-2"></i>Submit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Additems;
