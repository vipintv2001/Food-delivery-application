import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
        <Container className="py-3">
          <Navbar.Brand className="fs-4">
            <img
              alt=""
              src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/sites/2148159228/images/0a66b7-43b8-2d30-72d-7db3c6aff438_Food-Ordering-App-iOS-System-Design.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            TastyFood
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
