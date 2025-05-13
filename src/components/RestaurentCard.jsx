import React from "react";
import Card from "react-bootstrap/Card";

function RestaurentCard() {
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
        src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
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
              Delight Hotel
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
            Authentic Indian, Arabian, and Chinese dishes served fresh and hot.
          </Card.Text>
        </div>

        <div className="d-flex justify-content-between align-items-end mt-3">
          <div>
            <span className="badge bg-light text-dark border me-1">Indian</span>
            <span className="badge bg-light text-dark border me-1">
              Arabian
            </span>
            <span className="badge bg-light text-dark border">Chinese</span>
          </div>
          <span className="badge bg-danger text-white">Non-Veg</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RestaurentCard;
