import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Foodcard.css";
import { addToCartApi, deleteCartApi } from "../services/allApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Foodcard({ foodItem }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const selectedRestaurent = localStorage.getItem("selectedRestaurent");

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered((prev) => !prev);

  const productPrice = foodItem.price;
  const discount = foodItem.discount;
  const discountedPrice = Math.floor(
    productPrice - (productPrice * discount) / 100
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  const handleAddCart = async () => {
    console.log("Addedd item", foodItem);
    if (!token) {
      Swal.fire({
        title: "🔒 Login Required!",
        text: "You need to log in to add items to your cart.",
        icon: "warning",
        background: "#fffef0",
        color: "#333",
        confirmButtonColor: "#4caf50",
        cancelButtonColor: "#f44336",
        confirmButtonText: " Go to Login",
        cancelButtonText: "❌ Cancel",
        showCancelButton: true,
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    } else {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      if (selectedRestaurent && id !== selectedRestaurent) {
        const confirm = Swal.fire({
          title: "Different Restaurant Detected",
          text: "Your cart has items from another restaurant. Do you want to clear the cart and continue?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, clear cart",
          cancelButtonText: "Cancel",
        });

        if ((await confirm).isConfirmed) {
          try {
            const result = await deleteCartApi(reqHeader);
            if (result.status === 200) {
              localStorage.setItem("selectedRestaurent", id);
              const result = await addToCartApi(foodItem, reqHeader);
              if (result.status === 201) {
                toast.success("Item added to cart");
              } else {
                toast.error("something went wrong");
              }
            } else {
              toast.error("failed to clear cart");
            }
          } catch (err) {
            console.log("error", err);
            toast.error("some error occured");
          }
        }
      } else if (!selectedRestaurent) {
        localStorage.setItem("selectedRestaurent", id);
        const result = await addToCartApi(foodItem, reqHeader);
        if (result.status === 201) {
          toast.success("Item added to cart");
        } else {
          toast.error("something went wrong");
        }
      } else {
        const result = await addToCartApi(foodItem, reqHeader);
        if (result.status === 201) {
          toast.success("Item added to cart");
        } else {
          toast.error("something went wrong");
        }
      }
    }
  };

  return (
    <div
      className="foodcard-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <Card style={{ width: "26rem" }} className="shadow mt-3 mb-3 foodcard">
        <div className="image-container position-relative">
          <Card.Img
            variant="top"
            src={foodItem.productImage}
            className={`foodcard-image ${isHovered ? "blurred" : ""}`}
            style={{ height: "19rem" }}
          />
          {isHovered && (
            <div
              className="overlay-button d-flex justify-content-center align-items-center"
              onClick={handleAddCart}
            >
              <Button className="custom-cart-btn">
                <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
              </Button>
            </div>
          )}
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="fs-4 fw-bolder">
              {foodItem.productName}
            </Card.Title>
            <h4>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-warning"></i>
              ))}
            </h4>
          </div>
          <Card.Text className="foodcard-description">
            {foodItem.description}
          </Card.Text>
          <div>
            <h4 className="fw-bolder" style={{ fontFamily: "Poppins" }}>
              ₹{discountedPrice}{" "}
              {discount > 0 && (
                <span
                  className="me-1"
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "20px",
                  }}
                >
                  ₹{foodItem.price}
                </span>
              )}
              {discount > 0 && (
                <span style={{ fontWeight: "600", fontSize: "18px" }}>
                  ({foodItem.discount}% off)
                </span>
              )}
            </h4>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Foodcard;
