import React, { Component } from "react";

import { Row, Col, Container, Button } from "react-bootstrap";
import Modelbox from "../Components/Modelbox/Modelbox";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

class DemoPageGeneric extends Component {
  state = {};
  render() {
    return (
      <div className="allPageSize">
        <br />

        <Container fluid>
          <h1 style={{ textAlign: "center" }} className="Heading">
            Demo Page Generic
          </h1>
          <Modelbox />
          {/* <Row>
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
             <div >
                <p className="mb-1 textCenter">TEXT TEXT TEXT TEXT TEXT</p>
                <Button
              className="buttonCenter"
                  variant="default"
                  className="customButtonn"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                    padding:"1px"
                  }}
                >
                  <span className="Demobutton">
                    E X P L O R E
                  </span>
                </Button>
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
              <div >
                <p className="mb-1 textCenter">TEXT TEXT TEXT TEXT TEXT</p>
                <Button
              className="buttonCenter"
                  variant="default"
                  className="customButtonn"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                    padding:"1px"
                
                  }}
                >
                  <span className="Demobutton">
                    E X P L O R E
                  </span>
                </Button>
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
            <div >
                <p className="mb-1 textCenter">TEXT TEXT TEXT TEXT TEXT</p>
                <Button
              className="buttonCenter"
                  variant="default"
                  className="customButtonn"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                    padding:"1px"
                
                  }}
                >
                  <span className="Demobutton">
                    E X P L O R E
                  </span>
                </Button>
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
              <div >
                <p className="mb-1 textCenter">TEXT TEXT TEXT TEXT TEXT</p>
                <Button
              className="buttonCenter"
                  variant="default"
                  className="customButtonn"
                  style={{
                    borderStyle: "groove",
                    borderColor: "black",
                    borderWidth: "2px",
                    padding:"1px"
                
                  }}
                >
                  <span className="Demobutton">
                    E X P L O R E
                  </span>
                </Button>
              </div>
            </Col>
          </Row>*/}
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

export default DemoPageGeneric;
