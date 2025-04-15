import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <h3 className="text-center mt-5 fw-bolder">Cart Details</h3>
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0"></div>
          <div className="col-lg-7 col-md-8 col-sm-12">
            <table className="table table-hover fs-5 text-center mt-5">
              <thead>
                <tr>
                  <th>sl.No</th>
                  <th>Product</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="align-middle">
                  <td>1</td>
                  <td>
                    <img
                      src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
                      alt=""
                      width={"100px"}
                      height={"80px"}
                    />
                  </td>
                  <td>Cheese Burger</td>
                  <td>2</td>
                  <td>240</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>2</td>
                  <td>
                    <img
                      src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
                      alt=""
                      width={"100px"}
                      height={"80px"}
                    />
                  </td>
                  <td>Cheese Burger</td>
                  <td>2</td>
                  <td>240</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>3</td>
                  <td>
                    <img
                      src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
                      alt=""
                      width={"100px"}
                      height={"80px"}
                    />
                  </td>
                  <td>Cheese Burger</td>
                  <td>3</td>
                  <td>240</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>4</td>
                  <td>
                    <img
                      src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
                      alt=""
                      width={"100px"}
                      height={"80px"}
                    />
                  </td>
                  <td>Cheese Burger</td>
                  <td>2</td>
                  <td>240</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>5</td>
                  <td>
                    <img
                      src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637318.jpg?semt=ais_country_boost&w=740"
                      alt=""
                      width={"100px"}
                      height={"80px"}
                    />
                  </td>
                  <td>Cheese Burger</td>
                  <td>2</td>
                  <td>240</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h5 className="text-center mt-5">Cart Details</h5>
            <div>
              <ul class="list-group list-group-flush fs-5 ms-5">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Total Products
                  <span>- 5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Price
                  <span>- 560</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  GST(12%)
                  <span>-{Math.floor((560 * 12) / 100)}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Delivery Charge
                  <span>- 100</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center fw-bolder">
                  Total
                  <span>- 727</span>
                </li>
                <Link to={"/orders"}>
                  <button className="btn btn-success w-100 mt-3 fs-5 fw-bolder">
                    Proceed To Pay
                  </button>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-lg-1 col-md-0 col-sm-0"></div>
        </div>
      </div>
    </>
  );
}

export default Cart;
