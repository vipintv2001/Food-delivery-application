import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SuccessModal({ show, handleClose }) {
  const navigate = useNavigate();
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Body className="text-center py-5">
        <i
          className="fa-solid fa-circle-check text-success mb-4"
          style={{ fontSize: "4rem" }}
        ></i>
        <h4 className="fw-bold mb-2">Order Confirmed!</h4>
        <p className="text-muted">
          Thank you for your order. We’re preparing it with love and care!
        </p>
        <Button
          variant="success"
          className="mt-3 px-4"
          onClick={() => {
            handleClose();
            setTimeout(() => navigate("/orders"), 300); // slight delay for smoother transition
          }}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessModal;
