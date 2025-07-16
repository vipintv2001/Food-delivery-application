import React, { useEffect } from "react";
import "../admin/Admin.css";
import Adminfoodcard from "../../components/Adminfoodcard";
import RestaurentSidebar from "../../components/RestaurentSidebar";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Editfooditem from "../../components/Editfooditem";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { getFoodMenuApi } from "../../services/allApi";

function Viewitems() {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [foodItems, setFoodItems] = useState([]);
  const [loading,setLoading] = useState(true)

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const restaurentId = JSON.parse(sessionStorage.getItem("existingUser"))._id;

  useEffect(() => {
    const getFoodDetails = async () => {
      setLoading(true)
      const result = await getFoodMenuApi(restaurentId);
      setFoodItems(result.data);
      console.log("foods:", result.data);
      setLoading(false)
    };
    getFoodDetails();
  }, []);

  const handleDeleteItem = ()=>{

  }

  return (
    <>
      <div className="dashboard">
        <RestaurentSidebar />
        <div className="content content-bg">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 fw-semibold text-muted">
                Loading, please wait...
              </p>
            </div>
          ) : (<div className="container-fluid">
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
                  <div className="col-lg-5th col-sm-12 col-md-4 p-3">
                    <Adminfoodcard food={item} onDelete={(deletedId)=>{
                      setFoodItems(prev=>prev.filter(food=>food._id !== deletedId))
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>)}
        </div>
      </div>
      
      <Editfooditem show={showEdit} handleClose={handleEditClose} />
    </>
  );
}

export default Viewitems;
