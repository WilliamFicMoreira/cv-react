import React from "react";
import styled from "styled-components";

const SideNav = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  color: white;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  font-family: Anton;

  .SideNavBox {
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
  }

  .persona-image {
    max-height: 25rem;
    max-width: 30rem;
    margin-left: 2rem;
  }

  .skillList {
    padding: 0.5rem;
    background-color: #deddd9;
    width: 75%;
    color: black;
    font-weight: 700;
  }

  .skillList-item {
    margin: 0;
    padding: 0;
    display:flex;
    align-items: center;

    h4{
      margin: 0.1rem;
    }
  }

  .CloseButton {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  .itemsList {
  }


  /* Scrollbar */

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 10rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default SideNav;
