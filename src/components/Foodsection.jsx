import React, { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import { Link, useLocation } from "react-router-dom";
import { getFoodMenuApi } from "../services/allApi";

function Foodsection() {
  const [foodItems, setFoodItems] = useState([]);

  const location = useLocation();
  const currentPath = location.pathname;
  const restaurentId = currentPath.split("/")[2];
  console.log("path:", currentPath.split("/")[2]);

  useEffect(() => {
    const getFoodDetails = async () => {
      const result = await getFoodMenuApi(restaurentId);
      setFoodItems(result.data);
      console.log("foods:", result.data);
    };
    getFoodDetails();
  }, []);
  return (
    <div className="container-fluid my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-danger">Delights</h2>
        <p className="text-muted fs-5">
          Dive into our selection of delicious dishes.
        </p>
      </div>
      <div className="row gx-4 gy-4">
        {foodItems.length > 0 ? (
          foodItems.map((item, index) => (
            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3">
              <Foodcard foodItem={item} />
            </div>
          ))
        ) : (
          <p>No items in the menu</p>
        )}
      </div>
    </div>
  );
}

export default Foodsection;
