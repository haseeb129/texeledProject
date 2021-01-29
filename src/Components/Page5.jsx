import React, { Component } from "react";
import CarouselComponent from "./CarouselComponent";
import { Row, Col, Container, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class Page5 extends Component {
  state = {};
  render() {
    return (
      <div>
        <br />

        <Container fluid>
          <Row>
            <Col md={6} sm={6} className="p-4">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                thumbnailPosition="right"
                items={[
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                ]}
              />
              <div style={{ paddingLeft: "30%", margin: "0" }}>
                <p className="mb-1">First Title here</p>
                <Button varient="danger">Explore</Button>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} className="p-4">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                thumbnailPosition="right"
                items={[
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                ]}
              />
              <div style={{ paddingLeft: "30%", margin: "0" }}>
                <p className="mb-1">First Title here</p>
                <Button varient="danger">Explore</Button>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} className="p-4">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                thumbnailPosition="right"
                items={[
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                ]}
              />
              <div style={{ paddingLeft: "30%", margin: "0" }}>
                <p className="mb-1">First Title here</p>
                <Button varient="danger">Explore</Button>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} className="p-4">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                thumbnailPosition="right"
                items={[
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                  {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                  },
                  {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                    //   sizes: "width:200px;height:300px",
                  },
                ]}
              />
              <div style={{ paddingLeft: "30%", margin: "0" }}>
                <p className="mb-1">First Title here</p>
                <Button varient="danger">Explore</Button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* 
        <Container fluid>
          <Row>
            <Col md={6}>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default Page5;
