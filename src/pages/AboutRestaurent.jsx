import React, { useState } from "react";
import Header from "../components/Header";
import Foodsection from "../components/Foodsection";
import Footer from "../components/Footer";

function AboutRestaurant() {
  const [userReview, setUserReview] = useState({
    name: "",
    feedback: "",
    rating: 0,
  });
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (value) => {
    setUserReview((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userReview.name && userReview.feedback && userReview.rating > 0) {
      setSubmittedReviews((prev) => [...prev, userReview]);
      setUserReview({ name: "", feedback: "", rating: 0 });
    }
  };

  return (
    <>
      <div className="container-fluid bg-light min-vh-100">
        <Header />
        <div className="container-fluid py-5" style={{ marginTop: "120px" }}>
          <div className="row align-items-center">
            <div className="col-md-1"></div>
            <div className="col-md-5 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000"
                alt="Restaurant"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-5">
              <h1 className="fw-bold display-4 text-dark mb-3">
                Delight Hotel
              </h1>
              <p className="lead text-muted mb-3">
                Nestled in the heart of the city, Delight Hotel is known for its
                vibrant atmosphere, exceptional hospitality, and a diverse menu
                blending Indian, Arabian, and Chinese flavors.
              </p>
              <p className="text-muted">
                With a team of passionate chefs and cozy interiors, we strive to
                create unforgettable dining experiences. From spicy biryanis and
                crispy spring rolls to juicy kebabs — we serve joy on every
                plate.
              </p>
              <div className="mt-4">
                <h5 className="fw-semibold text-dark">Opening Hours:</h5>
                <p className="text-muted mb-2">
                  Everyday – 10:00 AM to 11:00 PM
                </p>
                <h5 className="fw-semibold text-dark">Location:</h5>
                <p className="text-muted">123, City Road, Downtown, Kochi</p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <h2 className="text-center fw-bold mb-4 text-dark">
            Explore Our Menu
          </h2>
          <Foodsection />
        </div>

        <div className="container my-5">
          <h2 className="text-center fw-bold mb-5 text-dark">
            What Our Customers Say
          </h2>
          <div className="row g-4">
            {[
              {
                name: "Ravi Kumar",
                rating: 5,
                feedback:
                  "Absolutely loved it! The cheese was perfectly melted and the bun was soft and fresh. Will order again!",
              },
              {
                name: "Anjali Sharma",
                rating: 4,
                feedback:
                  "Tasty and worth the price. Could have been a bit warmer but still very satisfying. Nicely packed too.",
              },
              {
                name: "Rahul Mehta",
                rating: 4,
                feedback:
                  "Good quality food and clean packaging. Will definitely recommend this restaurant to friends.",
              },
              {
                name: "Sneha Iyer",
                rating: 5,
                feedback:
                  "One of the best experiences I’ve had! Friendly staff, fast delivery, and absolutely delicious food.",
              },
            ].map((review, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                  <h5 className="fw-bold mb-2">{review.name}</h5>
                  <div className="text-warning mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star me-1"></i>
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <i key={i} className="fa-regular fa-star me-1"></i>
                    ))}
                  </div>
                  <p className="text-muted">{review.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container my-5">
          <h2 className="text-center fw-bold mb-4 text-dark">Write a Review</h2>
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-white rounded-4 shadow-sm"
          >
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Review</label>
              <textarea
                className="form-control"
                name="feedback"
                rows="4"
                value={userReview.feedback}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Rating</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`me-2 fa-star ${
                      userReview.rating >= star
                        ? "fa-solid text-warning"
                        : "fa-regular text-secondary"
                    }`}
                    style={{ cursor: "pointer", fontSize: "1.5rem" }}
                    onClick={() => handleRatingChange(star)}
                  ></i>
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit Review
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutRestaurant;
