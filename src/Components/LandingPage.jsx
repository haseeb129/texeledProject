import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";

class LandingPage extends Component {
  render() {
    return (
      <div class="containerVideo">
        <div class="centerVideo">
          <div class="videoText">
            <h1>TEXELED</h1>
            <p>TEXELED TEXELED TEXELED TEXELED.</p>
          </div>

          <ReactPlayer
            // className="videoPlayer"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div class="container">
  //       <div class="center1">
  //         <h1>TEXELED</h1>
  //         <p>TEXELED TEXELED TEXELED TEXELED.</p>
  //         {/* <ReactPlayer
  //           // className="videoPlayer"
  //           url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
  //         /> */}
  //         <div className="containerButton">
  //           <Button variant="success" className="centerButton">
  //             Play
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default LandingPage;
