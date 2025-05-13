import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Foodcard from "./Foodcard";

function RestaurentSection() {
  const rating = 4;
  return (
    <>
      <div className="container-fluid my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Top Restaurents in Kochi</h2>
          <p className="text-muted fs-5">Choose Your Best Restaurent.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
            <Link
              to="/restaurent"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurentCard />
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 ">
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
                src="https://cdn.sanity.io/images/rnxo5f5p/production/2ff7d43d2b832bf13d9f15c0df4da5d20693a586-6000x4000.jpg?w=3840&q=75&fit=clip&auto=format"
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
                      Rahmaniya
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
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Top Manthi Spot Of your Choice.
                  </Card.Text>
                </div>

                <div className="d-flex justify-content-between align-items-end mt-3">
                  <div>
                    <span className="badge bg-light text-dark border me-1">
                      Indian
                    </span>
                    <span className="badge bg-light text-dark border me-1">
                      Arabian
                    </span>
                    <span className="badge bg-light text-dark border">
                      Chinese
                    </span>
                  </div>
                  <div>
                    <span className="badge bg-danger text-white me-2">
                      Non-Veg
                    </span>
                    <span className="badge bg-success text-white">Veg</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzxoFpjgh4DKMhzVcQRhJMo5b7ds5GagF4g&s"
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
                      SreeKrishna Bhavan
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
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Best Veg Spot For the Veg Lovers
                  </Card.Text>
                </div>

                <div className="d-flex justify-content-between align-items-end mt-3">
                  <div>
                    <span className="badge bg-light text-dark border me-1">
                      South Indian
                    </span>
                    <span className="badge bg-light text-dark border me-1">
                      North Indian
                    </span>
                  </div>
                  <span className="badge bg-success text-white">Veg</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
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
                src="https://images.unsplash.com/photo-1682778418768-16081e4470a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
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
                      Oryx Village
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
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Top Food spot in the city
                  </Card.Text>
                </div>

                <div className="d-flex justify-content-between align-items-end mt-3">
                  <div>
                    <span className="badge bg-light text-dark border me-1">
                      MultiCuisine
                    </span>
                  </div>

                  <div>
                    <span className="badge bg-danger text-white me-2">
                      Non-Veg
                    </span>
                    <span className="badge bg-success text-white">Veg</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
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
                src="https://t3.ftcdn.net/jpg/02/06/04/70/360_F_206047084_OxZGQ404N8rocQmItLIQRMRWlQwV3mSH.jpg"
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
                      Rahmaniya
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
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Top Manthi Spot Of your Choice.
                  </Card.Text>
                </div>

                <div className="d-flex justify-content-between align-items-end mt-3">
                  <div>
                    <span className="badge bg-light text-dark border me-1">
                      Indian
                    </span>
                    <span className="badge bg-light text-dark border me-1">
                      Arabian
                    </span>
                    <span className="badge bg-light text-dark border">
                      Chinese
                    </span>
                  </div>
                  <div>
                    <div>
                      <span className="badge bg-danger text-white me-2">
                        Non-Veg
                      </span>
                      <span className="badge bg-success text-white">Veg</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
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
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/0e/c2/e7/yi-jing.jpg?w=600&h=400&s=1"
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
                      Rahmaniya
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
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Top Manthi Spot Of your Choice.
                  </Card.Text>
                </div>

                <div className="d-flex justify-content-between align-items-end mt-3">
                  <div>
                    <span className="badge bg-light text-dark border me-1">
                      Indian
                    </span>
                    <span className="badge bg-light text-dark border me-1">
                      Arabian
                    </span>
                    <span className="badge bg-light text-dark border">
                      Chinese
                    </span>
                  </div>
                  <div>
                    <span className="badge bg-danger text-white me-2">
                      Non-Veg
                    </span>
                    <span className="badge bg-success text-white">Veg</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <RestaurentCard />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <RestaurentCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurentSection;
