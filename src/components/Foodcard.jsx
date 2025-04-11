import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Foodcard() {
  return (
    <>
      <div>
        <Card style={{ width: "26rem" }} className="foodcard shadow mt-3">
          <Card.Img
            variant="top"
            src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
            width={"100%"}
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title className="fs-4 fw-bolder">Cheese Burger</Card.Title>
              <h4>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
              </h4>
            </div>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <h4 className="fw-bolder" style={{ fontFamily: "Poppins" }}>
                &#8377; 120{" "}
                <span
                  className="me-1"
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "20px",
                  }}
                >
                  140
                </span>
                <span style={{ fontWeight: "600", fontSize: "18px" }}>
                  (25% off)
                </span>
              </h4>
            </div>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Foodcard;
