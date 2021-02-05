import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
class CarouselComponent extends Component {
  render() {
    return (
      <Carousel indicators={true} controls={true}>
        <Carousel.Item style={{ minHeight: "60vh" }}>
          <img
            src="https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%252520Shot%2525202020-09-01%252520at%2525203.08.43%252520PM.png"
            alt="Girl in a jacket"
            className="responsiveImage"
          />

          <p
            style={{
              color: "black",
              float: "right",
              // fontStyle: "italic",
            }}
          >
            Believe it or not, this is a render
          </p>
        </Carousel.Item>
        <Carousel.Item style={{ minHeight: "60vh" }}>
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
        <Carousel.Item style={{ minHeight: "60vh" }}>
          <img
            src="https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%252520Shot%2525202020-09-01%252520at%2525203.08.43%252520PM.png"
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
