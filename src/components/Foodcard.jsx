import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Foodcard.css"; // We'll use this for styling

function Foodcard({ foodItem }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered((prev) => !prev); 

  const productPrice = foodItem.price;
  const discount = foodItem.discount;
  const discountedPrice = Math.floor(productPrice - (productPrice*discount/100));

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
            src={foodItem.img}
            className={`foodcard-image ${isHovered ? "blurred" : ""}`}
            style={{ height: "19rem" }}
          />
          {isHovered && (
            <div className="overlay-button d-flex justify-content-center align-items-center">
              <Button className="custom-cart-btn">
                <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
              </Button>
            </div>
          )}
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="fs-4 fw-bolder">{foodItem.name}</Card.Title>
            <h4>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-warning"></i>
              ))}
            </h4>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
