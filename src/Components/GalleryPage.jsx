import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

class GalleryPage extends Component {
  render() {
    return (
      <div className="allPageSize">
        <br />
        <Container fluid>
          <h1 style={{ textAlign: "center" }}>Gallery Page</h1>

          <Row>
            <Col>
              <div class="containerGallery">
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <div className="wrapper2">
                  <Button
                    variant="default"
                    className="customButton"
                    style={{
                      borderStyle: "groove",
                      borderColor: "black",
                      borderWidth: "2px",
                    }}
                  >
                    <span style={{ color: "black", fontSize: "15px" }}>
                      E X P L O R E
                    </span>
                  </Button>
                </div>
              </div>
              <span style={{ marginBottom: "0px", marginLeft: "3%" }}>
                Project X
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <div class="containerGallery">
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <Button
                  variant="default"
                  className="customButton fake_imgGallery1"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                  }}
                >
                  <span
                    style={{
                      color: "black",
                      fontSize: "12px",
                      padding: "2px",
                      wordWrap: "break-word",
                    }}
                  >
                    EXPLORE
                  </span>
                </Button>
              </div>

              <span style={{ marginBottom: "0px", marginLeft: "3%" }}>
                Project X
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <div class="containerGallery">
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  className="fake_imgGallery"
                  alt=""
                />
                <Button
                  variant="default"
                  className="customButton fake_imgGallery1"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                  }}
                >
                  <span
                    style={{
                      color: "black",
                      fontSize: "12px",
                      padding: "2px",
                      wordWrap: "break-word",
                    }}
                  >
                    EXPLORE
                  </span>
                </Button>
              </div>
              <span style={{ marginBottom: "0px", marginLeft: "3%" }}>
                Project X
              </span>
            </Col>
          </Row>
          {/* <Row className="pt-0  pb-2">
            <Col className="p-0 m-0">
              <div className="mainBlock p-2">
                <div class="row ">
                  <div class="column pl-3">
                    <img
                      src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                      className="responsiveImage"
                      // className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div class="column pl-3">
                    <img
                      src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                      className="responsiveImage"
                      // className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div class="column pl-3">
                    <img
                      src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                      className="responsiveImage"
                      // className="d-inline-block align-top"
                      alt=""
                    />
                  </div>
                  <div class="column1 pl-2">
                    <div className="container2">
                      <div className="vertical-center2">
                        <div className="wrapper2">
                          <Button
                            variant="default"
                            className="customButton"
                            style={{
                              borderStyle: "groove",
                              borderColor: "black",
                              borderWidth: "2px",
                            }}
                          >
                            <span style={{ color: "black", fontSize: "2.5vh" }}>
                              EXPLORE
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
          {/* <Row className="pt-0  pb-2">
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
              <div className="container2">
                <div className="vertical-center2">
                  <Button>Explore </Button>
                </div>
              </div>
            </Col>
            <span style={{ marginBottom: "0px" }}> Project X</span>
          </Row>
          <Row className="pt-0 pl-4 pr-4 pb-2">
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
            </Col>

            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <div className="container2">
                <div className="vertical-center2">
                  <Button>Explore </Button>
                </div>
              </div>
            </Col>
            <span style={{ marginBottom: "0px" }}> Project Y</span>
          </Row>

          <Row className="pt-0 pl-4 pr-4 pb-2">
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
            </Col>
            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <img
                src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                className="responsiveImage"
                alt=""
              />
            </Col>

            <Col md={3} sm={3} xs={3} className="p-0 m-0">
              <div className="container2">
                <div className="vertical-center2">
                  <Button>Explore </Button>
                </div>
              </div>
            </Col>
            <span style={{ marginBottom: "0px" }}> Project Z</span>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default GalleryPage;
