import React from "react";
import Card from "react-bootstrap/Card";

function RestaurentCard({ restaurent }) {
  const rating = 4;

  return (
    <Card
      className="shadow-lg border-0 mt-4 foodcard"
      style={{
        width: "26rem",
        height: "420px",
        borderRadius: "1rem",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Card.Img
        variant="top"
        src={restaurent.restaurentImage}
        style={{
          height: "260px", // increased from 200px
          objectFit: "cover",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      />
      <Card.Body className="p-3 d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Card.Title className="fs-5 fw-bold text-dark mb-0">
              {restaurent.restaurentName}
            </Card.Title>
            <div>
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-star fa-solid ${
                    i < rating ? "text-warning" : "text-muted"
                  }`}
                  style={{ fontSize: "0.85rem", marginLeft: "1px" }}
                ></i>
              ))}
            </div>
          </div>
          <Card.Text className="text-secondary" style={{ fontSize: "0.9rem" }}>
            {/* Authentic Indian, Arabian, and Chinese dishes served fresh and hot. */}
            {restaurent.cardDescription}
          </Card.Text>
          <Card.Text className="text-secondary" style={{ fontSize: "0.9rem" }}>
            Location:{restaurent.location}
          </Card.Text>
        </div>

        <div className="d-flex justify-content-between align-items-end mt-3">
          <div>
            {restaurent.categories.map((item) => (
              <span className="badge bg-light text-dark border me-1">
                {item}
              </span>
            ))}
          </div>
          <div>
            {restaurent.foodTypes.map((item) =>
              item === "veg" ? (
                <span className="badge bg-success text-white me-1">{item}</span>
              ) : (
                <span className="badge bg-danger text-white me-1">{item}</span>
              )
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RestaurentCard;
