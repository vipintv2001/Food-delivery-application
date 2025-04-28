import React from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";

function Edititems() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content container-fluid">
        <h2 className="text-center fw-bold my-4">Edit Product Details</h2>

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
                    value={"Chilly Chicken"}
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
                    value={
                      "https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg"
                    }
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter product description"
                  value={"Some quick example text to build on the card title and make up the "}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <select className="form-select">
                  <option selected disabled>
                    Select category
                  </option>
                  <option value="Chineese" selected>
                    Chineese
                  </option>
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
                  value={480}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Discount (%)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter discount"
                  value={0}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success px-4 py-2 fs-6"
                >
                  <i class="bi bi-pencil-square me-2"></i>Edit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edititems;
