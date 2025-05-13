import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Editfooditem({ show, handleClose }) {
  return (
    <>
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
            onClick={handleClose}
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
