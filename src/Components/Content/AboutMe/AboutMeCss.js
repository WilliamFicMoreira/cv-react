import React from "react";
import styled from "styled-components";

const AboutMeCss = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  .Author {
    display: flex;
    padding: 0.2rem;
    align-items: center;
    justify-content: center;
    /* border: solid 0.15rem black; */
    img {
      max-height: 10rem;
      border-radius: 50%;
      filter: grayscale(55%);
    }
  }

  h1 {
    /* color: blue; */
    text-align: center;
    font-family: Persona;
    font-size: 3rem;
  }

  h2 {
    text-align: center;
  }

  p {
    margin: 3rem;
    text-align: center;
  }

  .speech {
    /* (A1) FONT */
    font-size: 1.1rem;

    /* (A2) COLORS */
    color: #262321;
    background: #d9d9d9;

    /* (A3) DIMENSIONS + POSITION */
    position: relative;
    padding: 20px;
    border-radius: 10px;
    margin: 50px auto;
    max-width: 75%;
    ::after {
      /* (B1-1) ATTACH TRANSPARENT BORDERS */
      content: "";
      border: 20px solid transparent;

      /* (B1-2) NECESSARY TO POSITION THE "TAIL" */
      position: absolute;
    }
  }

  .top.speech::after {
    /* (C1-1) UP TRIANGLE */
    border-bottom-color: #d9d9d9;
    border-top: 0;

    /* (C1-2) POSITION AT TOP */
    top: -20px;
    left: 50%;
    margin-left: -20px;
  }
`;

export default AboutMeCss;
