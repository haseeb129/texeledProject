import React from "react";
import "./Modelbox.css";
import { Row, Col } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import Dialog1 from "@material-ui/core/Dialog";
import Dialog2 from "@material-ui/core/Dialog";
import Dialog3 from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContent1 from "@material-ui/core/DialogContent";
import DialogContent2 from "@material-ui/core/DialogContent";
import DialogContent3 from "@material-ui/core/DialogContent";

class Modelbox extends React.Component {
  // const [open, setOpen] = React.useState(false);

  state = {
    open: false,
    open1: false,
    open2: false,
    open3: false,
  };

  state = {
    images: [
      {
        id: 1,
        img:
          "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      },
      {
        id: 2,
        img:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
      },

      {
        id: 3,
        img: "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
      },

      {
        id: 4,
        img:
          "https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8aGlsbHN8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
      },

      {
        id: 5,
        img:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
      },
    ],
    selectedImageIndex: 0,

    images1: [
      {
        id: 1,
        img:
          "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      },
      {
        id: 2,
        img:
          "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png",
      },

      {
        id: 3,
        img: "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
      },
      {
        id: 4,
        img:
          "https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8aGlsbHN8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
      },

      {
        id: 5,
        img:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
      },
    ],
    selectedImageIndex1: 0,

    images2: [
      {
        id: 1,
        img:
          "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      },
      {
        id: 2,
        img:
          "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png",
      },

      {
        id: 3,
        img: "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
      },
      {
        id: 4,
        img:
          "https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8aGlsbHN8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
      },

      {
        id: 5,
        img:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
      },
    ],
    selectedImageIndex2: 0,

    images3: [
      {
        id: 1,
        img:
          "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
      },
      {
        id: 2,
        img:
          "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png",
      },

      {
        id: 3,
        img: "https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",
      },
      {
        id: 4,
        img:
          "https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8aGlsbHN8fDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
      },

      {
        id: 5,
        img:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
      },
    ],
    selectedImageIndex3: 0,
  };

  onClickHandler = (e) => {
    this.setState({
      selectedImageIndex: e.target.dataset.index,
    });
  };

  onClickHandler1 = (e) => {
    this.setState({
      selectedImageIndex1: e.target.dataset.index,
    });
  };

  onClickHandler2 = (e) => {
    this.setState({
      selectedImageIndex2: e.target.dataset.index,
    });
  };

  onClickHandler3 = (e) => {
    this.setState({
      selectedImageIndex3: e.target.dataset.index,
    });
  };
  render() {
    const handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };

    const handleClose = () => {
      this.setState({
        open: false,
      });
    };

    const handleClickOpen1 = () => {
      this.setState({
        open1: true,
      });
    };

    const handleClose1 = () => {
      this.setState({
        open1: false,
      });
    };

    const handleClickOpen2 = () => {
      this.setState({
        open2: true,
      });
    };

    const handleClose2 = () => {
      this.setState({
        open2: false,
      });
    };

    const handleClickOpen3 = () => {
      this.setState({
        open3: true,
      });
    };

    const handleClose3 = () => {
      this.setState({
        open3: false,
      });
    };

    const sideImages = this.state.images.map((image, index) => (
      <Col md={12} className="spce">
        <div className="col-4">
          <img
            key={image.id}
            src={image.img}
            alt="Thumbnail Image"
            data-index={index}
            style={{ width: "80px" }}
          />
        </div>
      </Col>
    ));

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            {" "}
            <img
              src={this.state.images[this.state.selectedImageIndex]["img"]}
              alt="Target Image"
              style={{ width: "100%" }}
            />
          </DialogContent>
        </Dialog>

        <Dialog1
          open={this.state.open1}
          onClose={handleClose1}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent1>
            {" "}
            <img
              src={this.state.images1[this.state.selectedImageIndex1]["img"]}
              alt="Target Image"
              style={{ width: "100%" }}
            />
          </DialogContent1>
        </Dialog1>

        <Dialog2
          open={this.state.open2}
          onClose={handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent2>
            {" "}
            <img
              src={this.state.images2[this.state.selectedImageIndex2]["img"]}
              alt="Target Image"
              style={{ width: "100%" }}
            />
          </DialogContent2>
        </Dialog2>

        <Dialog3
          open={this.state.open3}
          onClose={handleClose3}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent3>
            {" "}
            <img
              src={this.state.images3[this.state.selectedImageIndex3]["img"]}
              alt="Target Image"
              style={{ width: "100%" }}
            />
          </DialogContent3>
        </Dialog3>

        <Row>
          <Col md={6} xs={6}>
            <div>
              <Row>
                {" "}
                <Col md={9} xs={9}>
                  <div className="display">
                    <img
                      src={
                        this.state.images[this.state.selectedImageIndex]["img"]
                      }
                      alt="Target Image"
                      onClick={handleClickOpen}
                    />
                  </div>
                </Col>
                <Col md={3} xs={3}>
                  <div className="imageSlider">
                    <div onClick={this.onClickHandler} className="sideImages">
                      {sideImages}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6} xs={6}>
            <div>
              <Row>
                {" "}
                <Col md={9} xs={9}>
                  <div className="display">
                    <img
                      src={
                        this.state.images1[this.state.selectedImageIndex1][
                          "img"
                        ]
                      }
                      alt="Target Image"
                      onClick={handleClickOpen1}
                    />
                  </div>
                </Col>
                <Col md={3} xs={3}>
                  <div className="imageSlider">
                    <div onClick={this.onClickHandler1} className="sideImages">
                      {sideImages}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={6}>
            <div>
              <Row>
                {" "}
                <Col md={9} xs={9}>
                  <div className="display">
                    <img
                      src={
                        this.state.images2[this.state.selectedImageIndex2][
                          "img"
                        ]
                      }
                      alt="Target Image"
                      onClick={handleClickOpen2}
                    />
                  </div>
                </Col>
                <Col md={3} xs={3}>
                  <div className="imageSlider">
                    <div onClick={this.onClickHandler2} className="sideImages">
                      {sideImages}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6} xs={6}>
            <div>
              <Row>
                {" "}
                <Col md={9} xs={9}>
                  <div className="display">
                    <img
                      src={
                        this.state.images3[this.state.selectedImageIndex3][
                          "img"
                        ]
                      }
                      alt="Target Image"
                      onClick={handleClickOpen3}
                    />
                  </div>
                </Col>
                <Col md={3} xs={3}>
                  <div className="imageSlider">
                    <div onClick={this.onClickHandler3} className="sideImages">
                      {sideImages}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* <div>
              <Row>
                <Col md={8} xs={8}>
                  <img
                    src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                    alt=""
                    style={{ width: "100%", height: "97%" }}
                    onClick={handleClickOpen}
                  />
                </Col>

                <Col md={4} xs={4}>
                  <Row>
                    <Col md={12} className="spce">
                      <img
                        src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Col>

                    <Col md={12} className="spce">
                      <img
                        src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Col>

                    <Col md={12} className="spce">
                      <img
                        src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Modelbox;
