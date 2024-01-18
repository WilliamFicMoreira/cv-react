import React from "react";
import styled from "styled-components";

const FooterCss = styled.footer`
 margin: 0;
 padding: 1rem;
 background-color:#dd0200;
 display: flex;
 justify-content: center;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 font-weight: 400;

 h2{
    font-family: Persona;
    font-size: 2rem;
 }

 .footerList{
    margin: 0;
    padding: 2rem;

    .footerListContact{
        list-style: none;
        text-decoration: none;
    }

    .footerListSocials{
        list-style: none;
        text-decoration: none;
        // melhorar
        a:link, a:visited, a:hover, a:active{
            text-decoration: none;
            color: black;
            display: block; 
            width: 100%; 
            height: 100%;
        }
    }

 }

// melhorar
 .footerListItem{
    padding: 0.5rem;
    border-style: dashed solid;
    margin: 0.2rem;
    padding: 0.1rem;

    .SocialLogo{
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
    }
 }
    
`;


export default FooterCss;