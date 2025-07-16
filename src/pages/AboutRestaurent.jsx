import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Foodsection from "../components/Foodsection";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getAboutRestaurentApi } from "../services/allApi";
import { baseUrl } from "../services/baseUrl";
import RestaurentReview from "../components/RestaurentReview";

function AboutRestaurant() {
  const { id } = useParams();
  console.log(id);
  const [restaurant, setRestaurent] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAboutRestaurent = async () => {
    setLoading(true);
    const result = await getAboutRestaurentApi(id);
    setRestaurent(result.data);
    console.log("data:", result.data);
    console.log("restaurent Name:", result.data.restaurantName);
    setLoading(false);
  };

  useEffect(() => {
    getAboutRestaurent();
  }, [id]);

  return (
    <>
      <div className="container-fluid bg-light min-vh-100">
        <Header />
        {loading ? (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
) : (<>
        <div className="container-fluid py-5" style={{ marginTop: "120px" }}>
          {!restaurant ? (
            <div className="text-center">
              <p>Loading restaurent Details</p>
            </div>
          ) : (
            <div className="row align-items-center">
              <div className="col-md-1"></div>
              <div className="col-md-5 mb-4 text-center">
                <img
                  src={`${baseUrl}/uploads/${restaurant.restaurentImage}`}
                  alt="Restaurant"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                    maxWidth: "100%",
                  }}
                />
              </div>

              <div className="col-md-5">
                <h1 className="fw-bold display-4 text-dark mb-3">
                  {restaurant.restaurentName}
                </h1>
                <p className="lead text-muted mb-3">{restaurant.description}</p>
                <p className="text-muted">
                  With a team of passionate chefs and cozy interiors, we strive
                  to create unforgettable dining experiences. From spicy
                  biryanis and crispy spring rolls to juicy kebabs — we serve
                  joy on every plate.
                </p>
                <div className="mt-4">
                  <h5 className="fw-semibold text-dark">Opening Hours:</h5>
                  <p className="text-muted mb-2">
                    Everyday – {restaurant.openingHours}
                  </p>
                  <h5 className="fw-semibold text-dark">Location:</h5>
                  <p className="text-muted">{restaurant.location}</p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          )}
        </div>

        <div className="container-fluid my-5">
          <h2 className="text-center fw-bold mb-4 text-dark">
            Explore Our Menu
          </h2>
          <Foodsection />
        </div>
        <RestaurentReview restaurentId={id} />
        </>)}
      </div>

      <Footer />
    </>
  );
}

export default AboutRestaurant;
