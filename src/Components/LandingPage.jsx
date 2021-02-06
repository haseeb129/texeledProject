import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import video from "../assets/sample.mp4";
import Image1 from "../assets/sofas.jpg";
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
        <div className="containerMain">
          <div className="childMain">
            <div className="div1">
              {this.state.playing && (
                <ReactPlayer
                  className="showLogo"
                  width="100%"
                  height="100%"
                  url={video}
                  playing={this.state.playing}
                  controls={false}
                />
              )}
              {!this.state.playing && (
                <img
                  // "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"
                  src={Image1}
                  style={{
                    width: "150",
                    height: "150",
                  }}
                  alt=""
                />
              )}
              <div className="div2">
                <h1>TEXELED</h1>
                <p>TEXELED TEXELED TEXELED TEXELED.</p>
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
