import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Profile() {
  return (
    <>
      <Container
        fluid
        className="py-5 px-4 px-md-5"
        style={{ minHeight: "100vh" }}
      >
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-5 shadow-lg border-0 rounded-5">
              <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-4">
                <div>
                  <h1 className="fw-bold mb-2">Welcome, John Doe</h1>
                  <p className="text-muted fs-5">
                    Manage your account and view your recent orders.
                  </p>
                </div>
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-4 mt-3 mt-md-0"
                >
                  <i className="fas fa-user-edit me-2"></i> Edit Profile
                </Button>
              </div>

              <Row className="align-items-center mb-5">
                <Col md={3} className="text-center mb-4 mb-md-0">
                  <img
                    src="https://i.pravatar.cc/150"
                    alt="User"
                    className="rounded-circle img-fluid border border-3 border-primary"
                    style={{ maxWidth: "150px" }}
                  />
                </Col>
                <Col md={9}>
                  <h4 className="fw-bold">John Doe</h4>
                  <p className="text-muted mb-1">
                    <i className="fas fa-envelope me-2"></i> john@example.com
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-map-marker-alt me-2"></i> Chennai,
                    India
                  </p>
                </Col>
              </Row>

              <hr />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
