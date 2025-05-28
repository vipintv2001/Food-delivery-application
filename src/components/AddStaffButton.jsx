import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addNewStaffApi } from "../services/allApi";
import { toast } from "react-toastify";

function AddStaffButton({ onAdd }) {
  const [show, setShow] = useState(false);
  const [staffDetails, setStaffDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setStaffDetails({ name: "", email: "", phone: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("staff", staffDetails);
    const result = await addNewStaffApi(staffDetails);

    if (result.status === 201) {
      toast.success("staff added succesfully");
      setStaffDetails({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      handleClose();
    } else if (result.status === 409) {
      toast.warning("account already exists");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-person-plus-fill me-2"></i>Add New Staff
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Staff</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                value={staffDetails.name}
                onChange={(e) =>
                  setStaffDetails({ ...staffDetails, name: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={staffDetails.email}
                onChange={(e) =>
                  setStaffDetails({ ...staffDetails, email: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={staffDetails.phone}
                onChange={(e) =>
                  setStaffDetails({ ...staffDetails, phone: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Password"
                name="password"
                value={staffDetails.password}
                onChange={(e) =>
                  setStaffDetails({ ...staffDetails, password: e.target.value })
                }
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={handleSubmit}>
              Add Staff
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddStaffButton;
