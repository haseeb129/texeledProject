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
import { SocialMediaIconsReact } from "social-media-icons-react";
import { FaBars } from "react-icons/fa";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaRocketchat,
  FaRocket,
  FaFacebook,
} from "react-icons/fa";
import sidebarBg from "../assets/bg1.jpg";
import { SocialIcon } from "react-social-icons";
import logo from "../assets/LogoFile.jpg";
import logo1 from "../assets/LogoFile1.png";
import logo2 from "../assets/LogoFile2.png";
import logo3 from "../assets/LogoFile3.png";
import logo4 from "../assets/LogoFile4.png";
import logo5 from "../assets/LogoFile5.png";

import React, { Component } from "react";

class Aside extends Component {
  componentDidMount() {
    console.log("Aside props", this.props);
  }
  render() {
    return (
      <ProSidebar
        // image={sidebarBg}
        backgroundColor="white"
        collapsed={this.props.collapsed}
        toggled={this.props.toggled}
        breakPoint="lg"
        onToggle={this.props.handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            className="btn-toggle "
            style={{ margin: "2px" }}
            onClick={() => this.props.handleToggleSidebar(false)}
          >
            <FaBars />
          </div>
          <div
            style={
              {
                // padding: "20px",
                // textTransform: "uppercase",
                // fontWeight: "bold",
                // fontSize: 14,
                // letterSpacing: "1px",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
              }
            }
          >
            <ScrollTo selector={`#landingPageP1`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  // borderRight: "2px solid #000",
                  // borderCornerShape: "bevel",
                }}
              >
                <img
                  style={{ width: "160px", height: "130px" }}
                  src={logo5}
                  // className="d-inline-block align-top"
                  alt=""
                />
              </div>
            </ScrollTo>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#landingPageP1`}>
                <span className="sidebarFontSize">Landing Page P1</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#landingPageP2`}>
                <span className="sidebarFontSize">Landing Page P2</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#visionPage`}>
                <span
                  className=""
                  style={{ display: "block", fontSize: " 3vh" }}
                >
                  Vision Page
                </span>
                <span style={{ paddingLeft: "10px", fontStyle: "italic" }}>
                  Coming Soon
                </span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#sellersPageP1`}>
                <span className="sidebarFontSize">Sellers Page P1</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#sellersPageP2`}>
                <span className="sidebarFontSize">Sellers Page P2</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#buyersPage`}>
                <span className="sidebarFontSize">Buyers Page</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#demoPage`}>
                <span className="sidebarFontSize">Demo Page</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ paddingLeft: "40px", marginBottom: "8px" }}>
              <ScrollTo selector={`#galleryPage`}>
                <span className="sidebarFontSize">Gallery Page</span>
              </ScrollTo>
            </MenuItem>
            <MenuItem
              style={{
                // backgroundColor: "#083242",
                paddingLeft: "40px",
                marginBottom: "8px",
              }}
            >
              <ScrollTo selector={`#galleryPage`}>
                <span
                  style={{
                    color: "#4391DF",
                    fontWeight: "bold",
                  }}
                  className="sidebarFontSize"
                >
                  LogIn
                </span>
              </ScrollTo>
            </MenuItem>
            <MenuItem style={{ marginBottom: "8px" }}>
              <SocialIcon
                network="facebook"
                url="http://facebook.com"
                style={{ height: 40, width: 40, margin: "5px" }}
              />
              <SocialIcon
                network="instagram"
                url="http://instagram.com"
                style={{ height: 40, width: 40, margin: "5px" }}
              />
              <SocialIcon
                network="twitter"
                url="http://twitter.com"
                style={{ height: 40, width: 40, margin: "5px" }}
              />
              <SocialIcon
                network="youtube"
                url="http://youtube.com"
                style={{
                  height: 40,
                  width: 40,
                  margin: "5px",
                }}
              />
            </MenuItem>
            <MenuItem>
              {/* <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.96)"
              borderWidth="5"
              borderStyle="solid"
              icon="instagram"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(233,233,233,1)"
              iconSize="5"
              roundness="50%"
              url="https://some-website.com/my-social-media-url"
              size="100"
              /> */}
            </MenuItem>
          </Menu>
        </SidebarContent>

        {/* <SidebarFooter>
          <SocialIcon
            network="tumblr"
            url="http://twitter.com"
            style={{ height: 40, width: 40 }}
          />
        </SidebarFooter> */}
      </ProSidebar>
    );
  }
}

export default Aside;
