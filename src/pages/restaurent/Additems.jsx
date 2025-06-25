import React, { useState } from "react";
import "../admin/Admin.css";
import Sidebar from "../../components/Sidebar";
import RestaurentSidebar from "../../components/RestaurentSidebar";
import { toast } from "react-toastify";
import { addFoodItemApi } from "../../services/allApi";

function Additems() {
  const [foodItemDetails, setFoodItemDetails] = useState({
    productName: "",
    productImage: "",
    description: "",
    category: "",
    price: "",
    discount: "",
    restaurentName: "",
  });

  const restaurentName = JSON.parse(
    sessionStorage.getItem("existingUser")
  ).restaurentName;
  console.log("restaurent", restaurentName);
  const token = sessionStorage.getItem("token");

  const handleSubmit = async () => {
    console.log(foodItemDetails);
    const {
      productName,
      productImage,
      description,
      category,
      price,
      discount,
    } = foodItemDetails;
    if (
      !productName ||
      !productImage ||
      !description ||
      !category ||
      !price ||
      !discount
    ) {
      toast.warning("please fill the form completely");
    } else {
      const finalFoodData = {
        ...foodItemDetails,
        restaurentName: restaurentName,
      };

      console.log("Submitting:", finalFoodData);
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await addFoodItemApi(finalFoodData, reqHeader);
      if (result.status === 201) {
        toast.success("product added succesfully");
        setFoodItemDetails({
          productName: "",
          productImage: "",
          description: "",
          category: "",
          price: "",
          discount: "",
        });
      } else if (result.status === 409) {
        toast.warning("product already exists");
      } else {
        toast.error("something went wrong");
      }
    }
  };
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
                    onChange={(e) =>
                      setFoodItemDetails({
                        ...foodItemDetails,
                        productName: e.target.value,
                      })
                    }
                    value={foodItemDetails.productName}
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
                    onChange={(e) =>
                      setFoodItemDetails({
                        ...foodItemDetails,
                        productImage: e.target.value,
                      })
                    }
                    value={foodItemDetails.productImage}
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
                    setFoodItemDetails({
                      ...foodItemDetails,
                      description: e.target.value,
                    })
                  }
                  value={foodItemDetails.description}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Category</label>
                <select
                  className="form-select"
                  onChange={(e) =>
                    setFoodItemDetails({
                      ...foodItemDetails,
                      category: e.target.value,
                    })
                  }
                  value={foodItemDetails.category}
                >
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
                  onChange={(e) =>
                    setFoodItemDetails({
                      ...foodItemDetails,
                      price: e.target.value,
                    })
                  }
                  value={foodItemDetails.price}
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Discount (%)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter discount"
                  onChange={(e) =>
                    setFoodItemDetails({
                      ...foodItemDetails,
                      discount: e.target.value,
                    })
                  }
                  value={foodItemDetails.discount}
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success px-4 py-2 fs-6"
                  onClick={handleSubmit}
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
