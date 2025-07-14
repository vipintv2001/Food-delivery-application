import React, { useEffect, useState } from "react";
import { getReviewApi, submittReviewApi } from "../services/allApi";
import { toast } from "react-toastify";

function RestaurentReview({ restaurentId }) {
  const [userReview, setUserReview] = useState({
    name: "",
    feedback: "",
    rating: 0,
    restaurentId: restaurentId,
  });
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(sessionStorage.getItem("existingUser"));
      if (userData?.name) {
        setUserReview((prev) => ({ ...prev, name: userData.name }));
      }
    }
  }, []);

  const fetchReview = async () => {
    const result = await getReviewApi(restaurentId);
    console.log("review:", result.data);
    setAllReviews(result.data);
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const handleRatingChange = (value) => {
    setUserReview({ ...userReview, rating: value });
  };

  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      Swal.fire({
        title: "🔒 Login Required!",
        text: "You need to log in to write review",
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
    } else {
      if (userReview.name && userReview.feedback && userReview.rating > 0) {
        console.log("review", userReview);
        const result = await submittReviewApi(userReview, reqHeader);
        toast.success("review Submitted");
      } else {
        toast.warning("please fill all the field");
      }
    }
  };
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5 text-dark">
          What Our Customers Say
        </h2>
        <div className="row g-4">
          {allReviews.length > 0 ? (
            allReviews.map((review, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                  <h5 className="fw-bold mb-2">{review.userName}</h5>
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
            ))
          ) : (
            <p>NO Reviews</p>
          )}
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
              onChange={(e) =>
                setUserReview({
                  ...userReview,
                  feedback: e.target.value,
                })
              }
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
    </>
  );
}

export default RestaurentReview;
