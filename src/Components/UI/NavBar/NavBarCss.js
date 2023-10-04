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
    font-size: 2.2rem;
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

    img {
      max-height: 3rem;
    }

    h5 {
      text-align: center;
      margin: 0;
    }

    :hover {
      background-color: black;
      color: white;
      border: solid 0.15rem white;
      transform: rotate(-5deg);
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
        box-shadow: 0.6rem 0.7rem;
        border: solid 0.15rem black;
        cursor: pointer;

        :hover {
          background-color: black;
          color: white;
          border: solid 0.15rem white;
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
        box-shadow: 0.6rem 0.7rem;
        border: solid 0.15rem black;
        cursor: pointer;

        :hover {
          background-color: black;
          color: white;
          border: solid 0.15rem white;
          transform: rotate(-5deg);
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
      
    }
  }
`;

export default Nav;
