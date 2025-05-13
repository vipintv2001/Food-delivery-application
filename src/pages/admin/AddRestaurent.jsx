import React, { useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import AddressSelector from "../../components/AddressSelector";
import RestaurentAddress from "../../components/RestaurentAddress";

function AddRestaurent() {
  const [lattitud, setLattitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleCoordinate = ({ lat, lng }) => {
    setLattitude(lat);
    setLongitude(lng);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content content-bg container-fluid">
        <h2 className="text-center fw-bold my-4">Add New Restaurent</h2>

        <div className="d-flex justify-content-center">
          <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Restaurent Name
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-basket-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Restaurent name"
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
                <div className="d-flex flex-wrap gap-3">
                  {[
                    "Chinese",
                    "Indian",
                    "Italian",
                    "North Indian",
                    "South Indian",
                    "Mexican",
                    "Arabian",
                    "MultiCuisine",
                  ].map((category, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={category}
                        id={`category-${index}`}
                        name="categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`category-${index}`}
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Food type</label>
                <div className="d-flex flex-wrap gap-3">
                  {["Veg", "Non-Veg"].map((category, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={category}
                        id={`category-${index}`}
                        name="categories"
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`category-${index}`}
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Restaurent Address"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Restaurent Location
                </label>
                <RestaurentAddress onSelect={handleCoordinate} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success px-4 py-2 fs-6"
                >
                  <i className="bi bi-plus-circle me-2"></i>Add Restaurent
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurent;
