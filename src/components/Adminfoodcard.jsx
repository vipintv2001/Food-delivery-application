import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Adminfoodcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Card style={{ width: "16rem" }} className="foodcard shadow mt-3">
          <Card.Img
            variant="top"
            src="https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg"
            width={"100%"}
          />
          <Card.Body>
            <Card.Title className="fs-4 fw-bolder text-center mb-3">
              Chilly Chicken
            </Card.Title>
            <div className="d-flex justify-content-evenly">
              <Link to={"/admindashboard/edititems"}>
                <button className="btn btn-primary">
                  <i class="bi bi-pencil-square me-1"></i>Edit
                </button>
              </Link>
              <button className="btn btn-danger" onClick={handleShow}>
                <i className="bi bi-trash me-1"></i>Delete
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
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
            onClick={handleClose}
            className="px-4 rounded-pill"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleClose}
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
