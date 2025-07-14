import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


function Contact() {
  return (
    <>
      <Header />
      <div
        className="contact-page bg-light"
        style={{ minHeight: "100vh", paddingTop: "100px" }}
      >
        <Container className="pb-5">
          <h2 className="text-center text-primary fw-bold mb-4">
            <i className="bi bi-chat-left-text-fill me-2"></i> Contact Us
          </h2>
          <p className="text-center text-muted mb-5">
            We'd love to hear from you! Whether it’s feedback, support, or
            partnership opportunities.
          </p>

          <Row className="g-4">
            <Col md={6}>
              <Card className="shadow border-0 h-100">
                <Card.Body>
                  <h4 className="text-success fw-bold mb-4">Get in Touch</h4>
                  <div className="mb-4 d-flex align-items-start gap-3">
                    <i className="bi bi-geo-alt-fill fs-4 text-danger"></i>
                    <div>
                      <h6 className="fw-semibold">Address</h6>
                      <p className="mb-0 text-muted">
                        123 City Road, Kochi, Kerala - 682001
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 d-flex align-items-start gap-3">
                    <i className="bi bi-telephone-fill fs-4 text-primary"></i>
                    <div>
                      <h6 className="fw-semibold">Phone</h6>
                      <p className="mb-0 text-muted">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="mb-4 d-flex align-items-start gap-3">
                    <i className="bi bi-envelope-fill fs-4 text-warning"></i>
                    <div>
                      <h6 className="fw-semibold">Email</h6>
                      <p className="mb-0 text-muted">support@tastyfood.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-clock-fill fs-4 text-info"></i>
                    <div>
                      <h6 className="fw-semibold">Working Hours</h6>
                      <p className="mb-0 text-muted">
                        Sun - Sat: 9:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow border-0 h-100">
                <Card.Body>
                  <h4 className="text-success fw-bold mb-4">
                    Send Us a Message
                  </h4>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your message..."
                      />
                    </Form.Group>
                    <Button variant="success" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
