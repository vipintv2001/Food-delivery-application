import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editFoodItemsApi } from "../services/allApi";
import { toast } from "react-toastify";

function Editfooditem({ foodItem }) {
  if (!foodItem) return null;
  const [foodProducts, setFoodProducts] = useState({
    productName: foodItem.productName || "",
    productImage: foodItem.productImage || "",
    description: foodItem.description || "",
    category: foodItem.category || "",
    price: foodItem.price || "",
    discount: foodItem.discount || "",
    id: foodItem._id,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = sessionStorage.getItem("token");
  const handleEditItem = async () => {
    console.log("edited item", foodProducts);
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const id = foodProducts.id;
    const {
      productName,
      productImage,
      description,
      category,
      price,
      discount,
    } = foodProducts;
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
      const result = await editFoodItemsApi(id, foodProducts, reqHeader);
      if (result.status === 201) {
        toast.success("edited food item succesfully");
        handleClose();
      } else {
        toast.error("something went wrong");
      }
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        <i class="bi bi-pencil-square me-1"></i>Edit
      </button>
      <Modal show={show} onHide={handleClose} size="lg" className="border-0">
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center justify-content-center gap-2">
            <h5 className="modal-title fw-bold">Edit Product Details</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
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
                value={foodProducts.productName}
                onChange={(e) =>
                  setFoodProducts({
                    ...foodProducts,
                    productName: e.target.value,
                  })
                }
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
                value={foodProducts.productImage}
                onChange={(e) =>
                  setFoodProducts({
                    ...foodProducts,
                    productImage: e.target.value,
                  })
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
              value={foodProducts.description}
              onChange={(e) =>
                setFoodProducts({
                  ...foodProducts,
                  description: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select
              className="form-select"
              value={foodProducts.category}
              onChange={(e) =>
                setFoodProducts({
                  ...foodProducts,
                  category: e.target.value,
                })
              }
            >
              <option disabled>Select category</option>
              <option value="Chineese">Chineese</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
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
              value={foodProducts.price}
              onChange={(e) =>
                setFoodProducts({
                  ...foodProducts,
                  price: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">Discount (%)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter discount"
              value={foodProducts.discount}
              onChange={(e) =>
                setFoodProducts({
                  ...foodProducts,
                  discount: e.target.value,
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <Button
            variant="outline-secondary"
            onClick={handleClose}
            className="px-4 rounded-pill"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleEditItem}
            className="px-4 rounded-pill"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editfooditem;
