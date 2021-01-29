import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
class CarouselComponent extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src="https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%252520Shot%2525202020-09-01%252520at%2525203.08.43%252520PM.png"
            alt="Girl in a jacket"
            width="450"
            height="550"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <p>ibero, a pharetra .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-wing-chair-in-blue-color-by-dreamzz-furniture-royal-wing-chair-in-blue-color-by-dreamzz-furnit-6hcjya.jpg"
            alt="Girl in a jacket"
            width="450"
            height="550"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <p>ibero, a pharetra .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%252520Shot%2525202020-09-01%252520at%2525203.08.43%252520PM.png"
            alt="Girl in a jacket"
            width="450"
            height="550"
          />
          <Carousel.Caption style={{ color: "black" }}>
            <p>ibero, a pharetra .</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;
