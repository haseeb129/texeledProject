import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/sofas.jpg";
class CarouselComponent extends Component {
  render() {
    return (
      <Carousel indicators={true} controls={true}>
        <Carousel.Item style={{ Height: "60vh" }}>
          <img
            src={Image1}
            alt="Girl in a jacket"
            className="responsiveImage"
          />

          <p
            style={{
              color: "black",
              float: "right",
              fontStyle: "italic",
            }}
          >
            Believe it or not, this is a render
          </p>
        </Carousel.Item>
        <Carousel.Item style={{ Height: "60vh" }}>
          <img
            src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-wing-chair-in-blue-color-by-dreamzz-furniture-royal-wing-chair-in-blue-color-by-dreamzz-furnit-6hcjya.jpg"
            alt="Girl in a jacket"
            className="responsiveImage"
          />
          <p
            style={{
              color: "black",
              float: "right",
              fontStyle: "italic",
            }}
          >
            Believe it or not, this is a render
          </p>
        </Carousel.Item>
        <Carousel.Item style={{ Height: "60vh" }}>
          <img
            src={Image1}
            alt="Girl in a jacket"
            className="responsiveImage"
          />
          <p
            style={{
              color: "black",
              float: "right",
              fontStyle: "italic",
            }}
          >
            Believe it or not, this is a render
          </p>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;
