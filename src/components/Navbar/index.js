import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Annual Report
          </NavLink>
          <NavLink to="/team" activeStyle>
            Teams
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
        <div
            style={{
            //   display: "flex",
            //   justifyContent: "flex-end",
              paddingTop: 15,
            }}
          >
              <ConnectButton class="right-side"/>
          </div>
      </Nav>
      
    </>
  );
};

export default Navbar;
