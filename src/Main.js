import { useIntl } from "react-intl";
import { FaHeart, FaBars } from "react-icons/fa";
import reactLogo from "./assets/logo.svg";
import C2 from "./Components/C2";
import C1 from "./Components/C1";
import C3 from "./Components/C3";
import LandingPage from "./Components/LandingPage";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
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
          {/* <Route exact path="/home/2" render={(props) => <C2 {...props} />} />
          <Route exact path="/home/3" render={(props) => <C3 {...props} />} /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
