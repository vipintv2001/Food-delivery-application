import React, { use } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Editfooditem from "./Editfooditem";
import { deleteFoodItemApi } from "../services/allApi";
import { toast } from "react-toastify";

function Adminfoodcard({ food, onDelete }) {
  const [showDelete, setShowDelete] = useState(false);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);
  const token = sessionStorage.getItem("token");

  const handleDeleteItem = async () => {
    console.log("delete item:", food);
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await deleteFoodItemApi(food._id, reqHeader);
    if (result.status === 201) {
      toast.success("item deleted succesfully");
      handleDeleteClose();
      if (onDelete) onDelete(food._id);
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <div>
        <Card style={{ width: "100%" }} className="foodcard shadow mt-3">
          <Card.Img
            variant="top"
            src={food.productImage}
            width={"100%"}
            style={{ height: "11rem" }}
          />
          <Card.Body>
            <Card.Title className="fs-4 fw-bolder text-center mb-3">
              {food.productName}
            </Card.Title>
            <div className="d-flex justify-content-evenly">
              {food && <Editfooditem foodItem={food} />}

              <button className="btn btn-danger" onClick={handleDeleteShow}>
                <i className="bi bi-trash me-1"></i>Delete
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal
        show={showDelete}
        onHide={handleDeleteClose}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="d-flex align-items-center gap-2">
            Confirm Deletion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center px-4">
          <p className="fs-5 fw-medium mb-3">
            Are you sure you want to{" "}
            <span className="text-danger fw-bold">delete</span> this item?
          </p>
          <p className="text-muted small mb-0">
            This action cannot be undone. Please confirm.
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <Button
            variant="outline-secondary"
            onClick={handleDeleteClose}
            className="px-4 rounded-pill"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteItem}
            className="px-4 rounded-pill"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Adminfoodcard;
