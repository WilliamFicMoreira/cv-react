import React from "react";
import styled from "styled-components";

const CoursesCss = styled.section`
    display: flex;
    padding: 3rem;
    margin: 2rem 0.5rem;
    background-color: #400101;

    .CoursesItemBox {
    padding: 2.2rem 3.3rem;
    font-size: 1.1rem;
    color: white;
    border: none;
    background: none;
    outline: none;
    position: relative;
    z-index: 0;
    margin: 1.5rem;
    /* filter:drop-shadow(0px 30px 25px rgba(236, 0, 244, 0.45)); */
  }
  
  .CoursesItemBoxIn{
    padding: 0 0 1.2rem 1.2rem;
    border-left: 0.15rem solid white;
    position: relative;
  }

  .CoursesItemBoxIn::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: -0.7rem;
    top: 0.65rem;
    border-radius: 50px;
    background: rgb(31, 31, 31);
    border-width: 2px;
    border-style: solid;
    border-color: white;
    border-image: initial;
}

  h1{
    font-family: Teko;
    font-size: 3rem;
  }

  .CoursesItemBox:before,
  .CoursesItemBox:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(0 11%, 100% 0, 97% 85%, 3% 97%);
    transition: 1s all;
    background: black;
  }
  .CoursesItemBox:before {
    background: white;
    transform: scale(1.02, 1.12);
  }

  /* fazer animacao abaixo */

  /* .CoursesItemBox:hover:before,
  .CoursesItemBox:hover:after {
    clip-path: polygon(5% 2%, 100% 5%, 100% 100%, 0% 94%);
  } */
`

export default CoursesCss; 