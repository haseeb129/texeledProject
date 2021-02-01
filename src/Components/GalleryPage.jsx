import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

class GalleryPage extends Component {
  render() {
    return (
      <div>
        <br />

        <Container fluid>
          <h1 style={{ textAlign: "center" }}>Gallery Page</h1>
          <br />
          <Row className="pt-0 pl-4 pr-4 pb-0">
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>

            <Col md={3} sm={3} xs={3}>
              {/* <Button variant="info"> Explore</Button> */}
              <div className="container2">
                <div className="vertical-center2">
                  <Button>Explore </Button>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row className="pt-0 pl-4 pr-4 pb-0">
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>

            <Col md={3} sm={3} xs={3}>
              {/* <Button variant="info"> Explore</Button> */}
              <div className="container2">
                <div className="vertical-center2">
                  <Button>Explore </Button>
                </div>
              </div>
            </Col>
          </Row>{" "}
          <br />
          <Row className="pt-0 pl-4 pr-4 pb-0">
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3}>
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                // className="d-inline-block align-top"
                alt=""
              />
            </Col>

            <Col md={3} sm={3} xs={3}>
              {/* <Button variant="info"> Explore</Button> */}
              <div className="container2">
                <div className="vertical-center2">
                  <Button>Explore </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GalleryPage;
