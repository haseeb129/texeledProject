import { useIntl } from "react-intl";
import { FaHeart, FaBars } from "react-icons/fa";
import reactLogo from "./assets/logo.svg";
import LandingPage from "./Components/LandingPage";
import SellersPagePt1 from "./Components/SellersPagePt1";
import SellersPagePt2 from "./Components/SellersPagePt2";

import LandingPagep2 from "./Components/LandingPagep2";
import VisionPage from "./Components/VisionPage";
import DemoPageGeneric from "./Components/DemoPageGeneric";
import GalleryPage from "./Components/GalleryPage";
import BuyersPage from "./Components/BuyersPage";
import Test from "./Components/Test";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { Component } from "react";

class Main extends Component {
  componentDidMount() {
    console.log("Props Main", this.props);
  }
  render() {
    return (
      <main>
        <div
          className="btn-toggle"
          onClick={() => this.props.handleToggleSidebar(true)}
        >
          <FaBars />
        </div>

        <div className="fixedHeightPage" id="landingPageP1">
          <LandingPage />
        </div>

        <br />
        <div className="fixedHeightPage" id="landingPageP2">
          <LandingPagep2 />
        </div>
        <br />
        <br />

        <div className="fixedHeightPage" id="visionPage">
          <VisionPage />
        </div>
        <br />
        <br />

        <div className="fixedHeightPage" id="sellersPageP1">
          <SellersPagePt1 />
        </div>
        <br />
        <br />

        <div className="fixedHeightPage" id="sellersPageP2">
          <SellersPagePt2 />
        </div>
        <br />
        <br />

        <div className="fixedHeightPage" id="buyersPage">
          <BuyersPage />
        </div>
        <br />
        <br />
        <div className="fixedHeightPage " id="demoPage">
          <DemoPageGeneric />
        </div>
        <br />
        <br />
        <div className="fixedHeightPage" id="galleryPage">
          <GalleryPage />
        </div>
        <br />
        <br />
        {/*         
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            exact
            path="/home/test"
            render={(props) => <Test {...props} />}
          />
          <Route
            exact
            path="/home/page2"
            render={(props) => <Page2 {...props} />}
          />
          <Route
            exact
            path="/home/page3"
            render={(props) => <Page3 {...props} />}
          />
          <Route
            exact
            path="/home/page4"
            render={(props) => <Page4 {...props} />}
          />
          <Route
            exact
            path="/home/page5"
            render={(props) => <Page5 {...props} />}
          />
 
        </Switch> */}
      </main>
    );
  }
}

export default Main;
