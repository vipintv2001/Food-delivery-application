import React from "react";
import "../admin/Admin.css";
import Adminfoodcard from "../../components/Adminfoodcard";
import RestaurentSidebar from "../../components/RestaurentSidebar";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Editfooditem from "../../components/Editfooditem";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Viewitems() {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const foodItems = [
    {
      id: 1,
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg",
      name: "Masala Dosha",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
      name: "Pan Cake",
    },
    {
      id: 3,
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/10/4/0/FNM_110110-Cover-008-no-dial_s4x3.jpg.rend.hgtvcom.511.288.suffix/1382539588774.webp",
      name: "Shawaya Chicken",
    },
    {
      id: 4,
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Hyderabadi-Biryani-1024x538.jpg",
      name: "Hyderadadi Biriyani",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSfAr8B3D8-L9UT6Lx8ENlEY8VJFsvNoRhA&s",
      name: "kerala Meal",
    },
    {
      id: 6,
      img: "https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg",
      name: "Chilly Chicken",
    },
    {
      id: 7,
      img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: "Berger",
    },
    {
      id: 8,
      img: "https://c8.alamy.com/comp/2F4NKPN/professional-food-photography-table-top-view-layout-perfect-for-your-website-magazine-food-blog-or-anything-that-you-can-think-of-needing-it-for-2F4NKPN.jpg",
      name: "Pizza",
    },
  ];

  return (
    <>
      <div className="dashboard">
        <RestaurentSidebar />
        <div className="content content-bg">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-4 fw-bolder">Food Items</h3>
              <div className="input-icon-wrapper">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                {foodItems.map((item) => (
                  <div className="col custom-col p-3">
                    <Adminfoodcard food={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
            onClick={handleDeleteClose}
            className="px-4 rounded-pill"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Editfooditem show={showEdit} handleClose={handleEditClose} />
    </>
  );
}

export default Viewitems;
