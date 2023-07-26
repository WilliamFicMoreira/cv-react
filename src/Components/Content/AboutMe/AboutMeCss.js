import React from "react";
import styled from "styled-components";

const AboutMeCss = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

        h1{
            /* color: blue; */
            text-align: center;
        }

        h2{
            text-align: center;
        }

        p{
            margin: 3rem;
            text-align: center;
        }


        .speech {
            /* (A1) FONT */
            font-size: 1.1rem;
            
            /* (A2) COLORS */
            color: #262321;
            background: #D9D9D9;
            
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
            border-bottom-color: #D9D9D9;
            border-top: 0;
            
            /* (C1-2) POSITION AT TOP */
            top: -20px; left: 50%;
            margin-left: -20px;
            }

`

export default AboutMeCss; 