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
  .SideNavTitle {
    display: flex;
    justify-content: center;
  }

  .SideNavPersona {
    margin: 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .SideNavPersonaTitle{
      display:flex;
      flex-direction: column;
      h3{
        margin: 0 0;
      }
      h5{
        margin: 1rem 2rem;
      }
    }
    img {
      width: 45%;
      height: 45%;
      /* max-height: 25rem;
      max-width: 30rem; */
      /* margin: 1rem 1rem;   */
    }
  }

  .skillList {
    padding: 0.5rem;
    background-color: #deddd9;
    width: 85%;
    color: black;
    font-weight: 700;
  }

  .skillList-item {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    h4 {
      margin: 0.1rem;
    }
  }

  .CloseButton {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    
    .CloseBtn {
      width: 40px;
      height: 40px;
      background-color: lightgray;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
  
      :hover {
        background-color: red;
        color: black;
        transition-delay: 70ms;
        transition-property: transform;
      }
  
      :active {
        background-color: darkred;
        color: black;
        transition-delay: 70ms;
        transition-property: transform;
      }
    }
  
    .CloseIcon {
      line-height: 1;
    }
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
