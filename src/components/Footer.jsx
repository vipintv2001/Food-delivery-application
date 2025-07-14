import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="fw-bold">TastyFood</h5>
            <p className="text-muted">
              Serving joy on every plate with delicious flavors from around the
              world.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="text-muted text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/home#restaurent"
                  className="text-muted text-decoration-none"
                >
                  Restaurents
                </a>
              </li>
              <li>
                <a href="/orders" className="text-muted text-decoration-none">
                  Orders
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="text-muted mb-1">
              <i className="fa-solid fa-location-dot me-2"></i>123 City Road,
              Kochi
            </p>
            <p className="text-muted mb-1">
              <i className="fa-solid fa-phone me-2"></i>+91 98765 43210
            </p>
            <p className="text-muted mb-3">
              <i className="fa-solid fa-envelope me-2"></i>TastyFood@gmail.com
            </p>
            <div>
              <a href="#" className="text-white me-3 fs-5">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3 fs-5">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i class="fa-brands fa-whatsapp ms-3"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary mt-4" />
        <p className="text-center text-muted mb-0">
          © {new Date().getFullYear()} TastyFood. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
