// import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-scroll";
import ScrollTo from "react-scroll-into-view";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaRocketchat,
  FaRocket,
} from "react-icons/fa";
import sidebarBg from "../assets/bg1.jpg";
import logo from "../assets/LogoFile.jpg";

import React, { Component } from "react";

class Aside extends Component {
  componentDidMount() {
    console.log("Aside props", this.props);
  }
  render() {
    return (
      <ProSidebar
        image={sidebarBg}
        collapsed={this.props.collapsed}
        toggled={this.props.toggled}
        breakPoint="lg"
        onToggle={this.props.handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <img
              src={logo}
              width="60"
              height="50"
              // className="d-inline-block align-top"
              alt=""
            />
            <span className="ml-2"> TEXELED</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#landingPageP1`}>Landing Page P1</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#landingPageP2`}>Landing Page P2</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#visionPage`}>Vision Page</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#sellersPageP1`}>Sellers Page P1</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#sellersPageP2`}>Sellers Page P2</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#buyersPage`}>Buyers Page</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#demoPage`}>Demo Page</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#galleryPage`}>Gallery Page</ScrollTo>
            </MenuItem>
            <MenuItem icon={<FaRocket />}>
              <ScrollTo selector={`#galleryPage`}>LogIn</ScrollTo>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    );
  }
}

export default Aside;
