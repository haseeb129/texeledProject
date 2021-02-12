import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import { Button, Row, Col } from "react-bootstrap";
export default function Test() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <div class="containerGallery">
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            className="fake_imgGallery"
            alt=""
          />
        ))}
        <Button
          className="buttonCenter"
          variant="default"
          className="customButton"
          style={{
            borderStyle: "groove",
            borderColor: "black",
            borderWidth: "2px",
          }}
        >
          <span className="Demobutton">E X P L O R E</span>
        </Button>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
          />
        )}
      </div>

      <span style={{ marginBottom: "0px", marginLeft: "8%" }}>Project X</span>

      <div style={{ width: "50%" }}>
        <Row>
          <Col md={9} xs={9}>
            <img
              src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Col>

          <Col md={3} xs={3}>
            <Row>
              <Col md={12}>
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  alt=""
                  style={{ width: "100%" }}
                />
              </Col>
              <Col md={12}>
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  alt=""
                  style={{ width: "100%" }}
                />
              </Col>
              <Col md={12}>
                <img
                  src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  alt=""
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
