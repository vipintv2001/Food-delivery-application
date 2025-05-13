import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Cart() {
  const cartItems = [
    {
      id: 1,
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg",
      name: "Masala Dosha",
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
      name: "Pan Cake",
      price: 100,
      quantity: 10,
    },
    {
      id: 3,
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/10/4/0/FNM_110110-Cover-008-no-dial_s4x3.jpg.rend.hgtvcom.511.288.suffix/1382539588774.webp",
      name: "Shawaya Chicken",
      price: 450,
      quantity: 1,
    },
    {
      id: 4,
      img: "https://blog.swiggy.com/wp-content/uploads/2024/02/Hyderabadi-Biryani-1024x538.jpg",
      name: "Hyderadadi Biriyani",
      price: 180,
      quantity: 2,
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSfAr8B3D8-L9UT6Lx8ENlEY8VJFsvNoRhA&s",
      name: "kerala Meal",
      price: 120,
      quantity: 1,
    },
    {
      id: 6,
      img: "https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg",
      name: "Chilly Chicken",
      price: 420,
      quantity: 5,
    },
  ];

  const [quantity, SetQuantity] = useState(1);
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      SetQuantity(quantity - 1);
    }
  };
  const handleQuantityIncrease = () => {
    SetQuantity(quantity + 1);
  };
  return (
    <>
      <div className="container-fluid bg-light min-vh-100">
        <Header />
        <div className="text-center mb-4" style={{ marginTop: "100px" }}>
          <h2 className="fw-bold text-primary">
            <i class="bi bi-cart-check"></i> Your Cart
          </h2>
          <p className="text-muted">Review items and proceed to checkout</p>
        </div>
        <div className="row">
          <div className="col-lg-8 px-4">
            <div className="table-responsive bg-white rounded border border-secondary-subtle shadow-sm p-3">
              <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={item.img}
                          alt="burger"
                          className="rounded border"
                          style={{
                            width: "90px",
                            height: "70px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            onClick={handleQuantityDecrease}
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary ms-2"
                            onClick={handleQuantityIncrease}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <i className="fa-solid fa-trash fs-5 text-danger"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center mt-4">
                <Link to={"/restaurent"}>
                  <button className="btn btn-outline-success px-4 py-2 fs-5">
                    + Add More Items
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Right: Summary */}
          <div className="col-lg-4 px-4 mt-4 mt-lg-0">
            <div className="bg-white p-4 rounded shadow-sm border border-success-subtle">
              <h5 className="text-center mb-4 fw-bold text-success">
                <i class="fa-solid fa-bag-shopping me-2"></i> Summary
              </h5>
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item d-flex justify-content-between">
                  Total Items <span>5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Subtotal <span>₹ 480</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  GST (12%) <span>₹ {Math.floor((480 * 12) / 100)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold text-primary">
                  Total <span>₹ 620</span>
                </li>
              </ul>
              <Link to="/addressdetails">
                <button className="btn btn-success w-100 mt-4 py-2 fs-5 fw-bold">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
