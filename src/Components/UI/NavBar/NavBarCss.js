import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  margin: 0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  background-color: #D92938;
  justify-content: center;

  .NavBox {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0.6rem 0;
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

  .Author {
    padding: 0.2rem;
    /* border: solid 0.15rem black; */
    img {
      max-height: 7rem;
      border-radius: 50%;
    }
  }

  .Menu {

    .MenuLista {
      display: flex;
      list-style: none;
      padding: 0 0.5rem;
      li {
        margin: 1rem;
        padding: 0.1rem 1rem;
      }

      .MenuListaItem1 {
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

      .MenuListaItem2 {
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

      .MenuListaItem3 {
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

      .MenuListaItem4 {
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

      .MenuListaItem5 {
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
      
    }
  }
`;

export default Nav;
