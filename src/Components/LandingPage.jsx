import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import video from "../assets/sample.mp4";
class LandingPage extends Component {
  state = { playing: false };
  controlVideo = () => {
    let { playing } = this.state;
    console.log("playing", playing);
    this.setState({ playing: !playing });
  };
  render() {
    return (
      <div className="p-3 allPageSize">
        <div className="containerMain">
          <div className="childMain">
            <div className="div1">
              <ReactPlayer
                width="100%"
                height="100%"
                url={video}
                playing={this.state.playing}
                controls={false}
              />
              <div className="div2">
                <h1>TEXELED</h1>
                <p>TEXELED TEXELED TEXELED TEXELED.</p>
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
