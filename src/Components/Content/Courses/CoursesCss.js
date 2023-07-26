import React from "react";
import styled from "styled-components";

const CoursesCss = styled.section`
    display: flex;
    margin: 3.5rem;

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