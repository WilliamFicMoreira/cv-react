import React from "react";
import styled from "styled-components";


const Nav = styled.nav`
  margin: 0;
  padding: 0.45rem 0;
  display: flex;
  flex-direction: row;
  background-color: #dd0200;
  justify-content: center;

  .NavBox {
    font-size: 1.25rem;
    font-family: Persona;
    font-weight: bold;
    margin: 0.5rem 0;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }

  .SideNavButton {
    padding: 0.3rem;
    margin-right: 1rem;
    margin-left: 0.5rem;
    
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.35rem;

    img {
      max-height: 5rem;
      max-width: 6rem;
    }

    h5 {
      text-align: center;
      margin: 0;
    }

    :hover {
      background-color: white;
      color: black;
      box-shadow: 0.55rem 0.3rem black;
      transform: rotate(-5deg);
      transition-delay: 70ms;
      transition-property: transform;

        h5{
          display: inline;
        }
    }

    :active {
      transform: translateY(0.2rem);
      box-shadow: 0.3rem 0.2rem;
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
        padding: 0.2rem 0.5rem;
      }

      .MenuListaBotao-1 { 
        cursor: pointer;
        color: black;
        :hover {
          border: none;
          box-shadow: 0.4rem 0.5rem;
          background-color: white;
          color: black;
          transform: rotate(5deg);
          transition-delay: 70ms;
          transition-property: transform;
        }

        :active {
          transform: translateY(0.2rem);
          box-shadow: 0.3rem 0.4rem;
          transition-delay: 0ms;
          transition-property: transform;
        }
        
      }

      .MenuListaBotao-2 {
        cursor: pointer;
        :hover {
          border: none;
          background-color: black;
          color: white;
          box-shadow: 0.45rem 0.5rem;
          transform: rotate(-5deg);
          transition-delay: 70ms;
          transition-property: transform;
          animation: tiltBounceAlt .15s ease;
         animation-fill-mode: forwards;
        }

        :active {
          transform: translateY(0.2rem);
          box-shadow: 0.35rem 0.3rem;
          transition-delay: 0ms;
          transition-property: transform;
        }

        
        
      }
      
    }
  }
`;

export default Nav;
