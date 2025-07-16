import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import { getRestaurentApi } from "../services/allApi";

function RestaurentSection() {
  const [restaurentDetails, setRestaurentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const getRestaurent = async () => {
    setLoading(true);
    const result = await getRestaurentApi();
    setRestaurentDetails(result.data);
    console.log("restuarent", result.data);
    setLoading(false)
  };
  useEffect(() => {
    getRestaurent();
  }, []);

  return (
    <>
    {loading ? (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    ) :(<div className="container-fluid my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Top Restaurents in Kochi</h2>
          <p className="text-muted fs-5">Choose Your Best Restaurent.</p>
        </div>
        <div className="row">
          {restaurentDetails.length > 0 ? (
            restaurentDetails.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
                <Link
                  to={`/restaurent/${item._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <RestaurentCard restaurent={item} />
                </Link>
              </div>
            ))
          ) : (
            <p>Nothing to display</p>
          )}
        </div>
      </div>)}
    </>
  );
}

export default RestaurentSection;
