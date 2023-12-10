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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/interests">
            Buy
          </NavLink>
          <NavLink to="/seller">
            Seller
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
