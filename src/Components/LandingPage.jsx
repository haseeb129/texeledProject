import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import video from "../assets/sample.mp4";
import Image1 from "../assets/sofas.jpg";
import logo5 from "../assets/LogoFile5.png";
class LandingPage extends Component {
  state = { playing: false };
  controlVideo = () => {
    let { playing } = this.state;
    console.log("playing", playing);
    this.setState({ playing: !playing });
  };
  render() {
    return (
      <div className="p-2 allPageSize">
<<<<<<< HEAD
        <Row className="center">
          <img src={logo5} style={{ width: "33%" }} className="Hide-Web" />
        </Row>
        <div className="containerMain">
          <div className="childMainn">
            <div className="div1">
              <ReactPlayer
                width="100%"
                height="100%"
                url={video}
                playing={this.state.playing}
                controls={false}
                className="video"
              />
=======
          <Row className="center">
            <img src={logo5} style={{width:"23%"}} className="Hide-Web" />
            </Row>
        <div className="containerMain">
          <div className="childMainn">
          
        
            <div className="div1" >
          
                <ReactPlayer
             
                  width="100%"
                  height="100%"
         
                  url={video}
                  playing={this.state.playing}
                  controls={false}
                  className="video"
                />

         

>>>>>>> 642d9ad4445580bb2db28dbb770ed21c2a346083

              {/* {!this.state.playing && (
                <img
     
                  src={Image1}
                  style={{
                    width: "150",
                    height: "481px",
                  }}
                  alt=""
                />
              )} */}
              <div className="div2">
                <h1 className="heading">TEXELED</h1>
                <p className="description"> TEXELED TEXELED TEXELED TEXELED.</p>
                <div className="wrapper2">
                  <Button
                    onClick={this.controlVideo}
                    variant="default"
                    className="customButton"
                    style={{
                      borderStyle: "groove",
                      borderColor: "black",
                      borderWidth: "2px",
                    }}
                  >
                    <span style={{ color: "black", fontSize: "15px" }}>
                      P L A Y
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
