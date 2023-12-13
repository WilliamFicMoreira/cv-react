import React from "react";
import styled from "styled-components";
// import PersonaFont from "../../Fonts/persona-5-menu-font-prototype/Persona5MenuFontPrototype-Regular.ttf"


const Nav = styled.nav`
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  background-color: #D92938;
  justify-content: center;

  .NavBox {
    font-size: 2.0rem;
    font-family: Persona;
    margin: 0.5rem 0;
    /* padding: 1rem; */
    display: flex;
    flex: 1;
    /* justify-content: center; */
    align-items: center;
  }

  .SideNavButton {
    padding: 0.5rem;
    margin-right: 1rem;
    margin-left: 0.5rem;
    box-shadow: 0.6rem 0.7rem;
    border: solid 0.15rem black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;

    img {
      max-height: 4rem;
      max-width: 10rem;
    }

    h5 {
      text-align: center;
      margin: 0;
    }

    :hover {
      background-color: black;
      color: white;
      transform: rotate(-5deg);
      transition-delay: 70ms;
      transition-property: transform;

        h5{
          display: inline;
        }
    }

    :active {
      transform: translateY(0.2rem);
      box-shadow: 0.4rem 0.5rem;
      transition-delay: 0ms;
      transition-property: transform;
    }
  }

  .Menu {
    .MenuLista {
      display: flex;
      align-items: center;
      jusify-content: center;
      list-style: none;
      padding: 0 0.5rem;
      li {
        margin: 1rem;
        padding: 0.1rem 1rem;
      }

      .MenuListaBotao-1 { 
        cursor: pointer;
        color: black;
        border: solid black 0.12rem;
        box-shadow: 0.4rem 0.5rem;
        :hover {
          border: none;
          box-shadow: 0.6rem 0.7rem;
          background-color: white;
          color: black;
          transform: rotate(5deg);
          transition-delay: 70ms;
          transition-property: transform;
        }

        :active {
          transform: translateY(0.2rem);
          box-shadow: 0.4rem 0.5rem;
          transition-delay: 0ms;
          transition-property: transform;
        }
        
      }

      .MenuListaBotao-2 {
        cursor: pointer;
        border: solid black 0.12rem;
        box-shadow: 0.4rem 0.5rem;
        :hover {
          border: none;
          background-color: black;
          color: white;
          box-shadow: 0.6rem 0.7rem;
          transform: rotate(-5deg);
          transition-delay: 70ms;
          transition-property: transform;
          animation: tiltBounceAlt .15s ease;
         animation-fill-mode: forwards;
        }

        :active {
          transform: translateY(0.2rem);
          box-shadow: 0.4rem 0.5rem;
          transition-delay: 0ms;
          transition-property: transform;
        }

        
        
      }
      
    }
  }
`;

export default Nav;
