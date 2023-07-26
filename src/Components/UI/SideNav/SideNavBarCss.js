import React from "react";
import styled from "styled-components";

const SideNav = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  .SideNavBox {
    
  }

  .CloseButton{
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

`;

export default SideNav;
