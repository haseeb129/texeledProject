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
      <div className="p-1 allPageSize">
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
                <Button onClick={this.controlVideo}>Play Video</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
