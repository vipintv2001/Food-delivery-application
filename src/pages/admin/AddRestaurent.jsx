import React, { useState } from "react";
import "./Admin.css";
import Sidebar from "../../components/Sidebar";
import AddressSelector from "../../components/AddressSelector";
import RestaurentAddress from "../../components/RestaurentAddress";
import { toast } from "react-toastify";
import { addRestaurentApi } from "../../services/allApi";

function AddRestaurent() {
  const [restaurentDetails, setRestaurentDetails] = useState({
    name: "",
    resImage: "",
    description: "",
    cardDescription: "",
    categories: [],
    foodTypes: [],
    openingHours: "",
    location: "",
    lattitude: "",
    longitude: "",
    password: "",
    email: "",
  });

  const token = sessionStorage.getItem("token");

  const handleCheckbox = (e, field) => {
    const { value, checked } = e.target;

    setRestaurentDetails((prev) => {
      const updatedArray = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);

      return {
        ...prev,
        [field]: updatedArray,
      };
    });
  };

  const handleCoordinate = ({ lat, lng }) => {
    setRestaurentDetails({
      ...restaurentDetails,
      lattitude: lat,
      longitude: lng,
    });
  };

  const handleSubmit = async () => {
    console.log(restaurentDetails);
    const {
      name,
      resImage,
      description,
      cardDescription,
      categories,
      foodTypes,
      openingHours,
      location,
      lattitude,
      longitude,
      password,
      email,
    } = restaurentDetails;
    if (
      !name ||
      !resImage ||
      !description ||
      !cardDescription ||
      !categories ||
      !foodTypes ||
      !openingHours ||
      !location ||
      !lattitude ||
      !longitude ||
      !password ||
      !email
    ) {
      toast.warning("Please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("resImage", resImage);
      reqBody.append("description", description);
      reqBody.append("cardDescription", cardDescription);
      reqBody.append("categories", categories);
      reqBody.append("foodTypes", foodTypes);
      reqBody.append("openingHours", openingHours);
      reqBody.append("location", location);
      reqBody.append("lattitude", lattitude);
      reqBody.append("longitude", longitude);
      reqBody.append("password", password);
      reqBody.append("email", email);

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await addRestaurentApi(reqBody, reqHeader);
      if (result.status === 201) {
        toast.success("Restaurent Added Successfully");
        setRestaurentDetails({
          name: "",
          resImage: "",
          description: "",
          cardDescription: "",
          categories: [],
          foodTypes: [],
          openingHours: "",
          location: "",
          lattitude: "",
          longitude: "",
          password: "",
          email: "",
        });
      } else if (result.status === 409) {
        toast.warning("restaurent already exists");
      } else {
        toast.error("something went wrong");
      }
    }
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
                    <i className="bi bi-shop me-1 text-secondary"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Restaurent name"
                    onChange={(e) =>
                      setRestaurentDetails({
                        ...restaurentDetails,
                        name: e.target.value,
                      })
                    }
                    value={restaurentDetails.name}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Restaurent Image
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-image-fill"></i>
                  </span>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Upload the Image"
                    onChange={(e) =>
                      setRestaurentDetails({
                        ...restaurentDetails,
                        resImage: e.target.files[0],
                      })
                    }
                    // value={restaurentDetails.resImage}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter product description"
                  onChange={(e) =>
                    setRestaurentDetails({
                      ...restaurentDetails,
                      description: e.target.value,
                    })
                  }
                  value={restaurentDetails.description}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Card Description
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter card Description"
                    onChange={(e) =>
                      setRestaurentDetails({
                        ...restaurentDetails,
                        cardDescription: e.target.value,
                      })
                    }
                    value={restaurentDetails.cardDescription}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <div className="d-flex flex-wrap gap-3">
                  {[
                    "Chinese",
                    "Italian",
                    "North Indian",
                    "South Indian",
                    "Mexican",
                    "Arabian",
                    "MultiCuisine",
                    "Fast Food",
                    "Bakery",
                    "Cafe",
                  ].map((category, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={category}
                        id={`category-${index}`}
                        name="categories"
                        checked={restaurentDetails.categories.includes(
                          category
                        )}
                        onChange={(e) => handleCheckbox(e, "categories")}
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
                  {["veg", "non-veg"].map((category, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={category}
                        id={`category-${index}`}
                        name="categories"
                        checked={restaurentDetails.foodTypes.includes(category)}
                        onChange={(e) => handleCheckbox(e, "foodTypes")}
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
                <label className="form-label fw-semibold">Opening Hours</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Time"
                  onChange={(e) =>
                    setRestaurentDetails({
                      ...restaurentDetails,
                      openingHours: e.target.value,
                    })
                  }
                  value={restaurentDetails.openingHours}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Restaurent Location"
                  onChange={(e) =>
                    setRestaurentDetails({
                      ...restaurentDetails,
                      location: e.target.value,
                    })
                  }
                  value={restaurentDetails.location}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Restaurent Location
                </label>
                <RestaurentAddress onSelect={handleCoordinate} />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Id</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Restaurent email"
                  onChange={(e) =>
                    setRestaurentDetails({
                      ...restaurentDetails,
                      email: e.target.value,
                    })
                  }
                  value={restaurentDetails.email}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setRestaurentDetails({
                      ...restaurentDetails,
                      password: e.target.value,
                    })
                  }
                  value={restaurentDetails.password}
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success px-4 py-2 fs-6"
                  onClick={handleSubmit}
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
