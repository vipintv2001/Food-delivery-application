import React from "react";
import Foodcard from "./Foodcard";
import { Link } from "react-router-dom";

function Foodsection() {
  const foodMenu = [
    {
      id: 1,
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg",
      name: "Masala Dosha",
      price: 50,
      discount: 0,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
      name: "Pan Cake",
      price: 100,
      discount: 10,
    },
    {
      id: 3,
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/10/4/0/FNM_110110-Cover-008-no-dial_s4x3.jpg.rend.hgtvcom.511.288.suffix/1382539588774.webp",
      name: "Shawaya Chicken",
      price: 450,
      discount: 5,
    },
    {
      id: 4,
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Hyderabadi-Biryani-1024x538.jpg",
      name: "Hyderadadi Biriyani",
      price: 180,
      discount: 0,
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSfAr8B3D8-L9UT6Lx8ENlEY8VJFsvNoRhA&s",
      name: "kerala Meal",
      price: 120,
      discount: 5,
    },
    {
      id: 6,
      img: "https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg",
      name: "Chilly Chicken",
      price: 420,
      discount: 5,
    },
    {
      id: 7,
      img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: "Berger",
      price: 120,
      discount: 0,
    },
    {
      id: 8,
      img: "https://c8.alamy.com/comp/2F4NKPN/professional-food-photography-table-top-view-layout-perfect-for-your-website-magazine-food-blog-or-anything-that-you-can-think-of-needing-it-for-2F4NKPN.jpg",
      name: "Pizza",
      price: 320,
      discount: 2,
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-danger">Delights</h2>
        <p className="text-muted fs-5">
          Dive into our selection of delicious Chinese dishes.
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly">
        {foodMenu.map((item) => (
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Foodcard foodItem={item} />
          </Link>
        ))}
        {/* <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <Foodcard />
        </Link> */}
      </div>
    </div>
  );
}

export default Foodsection;
