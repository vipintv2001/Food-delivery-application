import React, { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { getCartApi, proceedToPayApi } from "../services/allApi";
import { toast } from "react-toastify";

function Cart() {
  const [cartDetails, setCartDetails] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [restaurentId,setRestaurentId] = useState("")
  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate(`/restaurent/${restaurentId}`);
  };

  useEffect(() => {
    const jwt_token = sessionStorage.getItem("token");
    if (!jwt_token) return;
    const getCart = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        };
        const result = await getCartApi(headers);
        console.log("cart:", result.data);
        console.log("restaurent id:",result.data[0].restaurentId)
        setCartDetails(result.data);
        setRestaurentId(result.data[0].restaurentId);

      } catch (err) {
        console.log("error", err);
      }
    };
    getCart();
  }, []);
  const handleQuantityDecrease = (index) => {
    setCartDetails((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      }
      return updatedCart;
    });
  };
  const handleQuantityIncrease = (index) => {
    setCartDetails((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1;
      return updatedCart;
    });
  };

  const handleProceedToPay = async () => {
    const jwt_token = sessionStorage.getItem("token");
    if (!jwt_token) return;
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      };
      const productQuantity = totalQuantity;
      const gst = Math.floor((totalPrice * 12) / 100);
      const subTotal = Math.floor(totalPrice + (totalPrice * 12) / 100);
      const reqBody = [
        cartDetails,
        { quantity: productQuantity, gst: gst, subTotal: subTotal,restaurentId:restaurentId },
      ];
      console.log("req Body", reqBody);
      const result = await proceedToPayApi(reqBody,headers);
      if (result.status === 200) {
        console.log("details",result.data)
      } else {
        toast.error("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!cartDetails || cartDetails.length === 0) return;

    const getTotalPrice = () => {
      return cartDetails.reduce((sum, item) => {
        const discounted = Math.floor(
          item.price - (item.price * item.discount) / 100
        );
        return sum + discounted * item.quantity;
      }, 0);
    };

    const getTotalQuantity = () => {
      return cartDetails.reduce((sum, item) => {
        return sum + item.quantity;
      }, 0);
    };

    setTotalPrice(getTotalPrice());
    setTotalQuantity(getTotalQuantity());
  }, [cartDetails]);

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
        {cartDetails.length > 0 ? (
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
                    {cartDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={item.productImage}
                            alt="burger"
                            className="rounded border"
                            style={{
                              width: "90px",
                              height: "70px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td>{item.productName}</td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <button
                              className="btn btn-sm btn-outline-secondary me-2"
                              onClick={() => handleQuantityDecrease(index)}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary ms-2"
                              onClick={() => handleQuantityIncrease(index)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          {item.quantity *
                            Math.floor(
                              item.price - (item.price * item.discount) / 100
                            )}
                        </td>
                        <td>
                          <i className="fa-solid fa-trash fs-5 text-danger"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-outline-success px-4 py-2 fs-5"
                    onClick={handleAddMore}
                  >
                    + Add More Items
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-4 mt-4 mt-lg-0">
              <div className="bg-white p-4 rounded shadow-sm border border-success-subtle">
                <h5 className="text-center mb-4 fw-bold text-success">
                  <i class="fa-solid fa-bag-shopping me-2"></i> Summary
                </h5>
                <ul className="list-group list-group-flush fs-5">
                  <li className="list-group-item d-flex justify-content-between">
                    Total Items <span>{totalQuantity}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Subtotal <span>₹ {totalPrice}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    GST (12%){" "}
                    <span>₹ {Math.floor((totalPrice * 12) / 100)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold text-primary">
                    Total{" "}
                    <span>
                      ₹ {Math.floor(totalPrice + (totalPrice * 12) / 100)}
                    </span>
                  </li>
                </ul>
                <Link to="/addressdetails">
                  <button
                    className="btn btn-success w-100 mt-4 py-2 fs-5 fw-bold"
                    onClick={handleProceedToPay}
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No items in cart</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
