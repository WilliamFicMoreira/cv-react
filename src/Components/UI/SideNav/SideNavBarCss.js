import React from "react";
import styled from "styled-components";

const SideNav = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75vw;
  color: white;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  .SideNavBox {
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
  }

  .persona-image{
    max-height: 20rem;
    max-width: 30rem;
  }

  .skillList {
    padding: 1rem;
    background-color: #deddd9;
    width: 80%;
    color: black;
    font-weight: 700;
  }

  .skillList-item {
    margin: 0;
    padding: 0;
  }

  .CloseButton{
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .itemsList{
    
  }

`;

export default SideNav;
