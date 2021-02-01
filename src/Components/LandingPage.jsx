import React, { Component } from "react";
import { Button } from "react-bootstrap";
class LandingPage extends Component {
  render() {
    return (
      <div class="container">
        <div class="center1">
          <h1>TEXELED</h1>
          <p>TEXELED TEXELED TEXELED TEXELED.</p>

          <div className="containerButton">
            <Button variant="success" className="centerButton">
              Play
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
