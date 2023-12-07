import React from "react";
import FooterCss from "./FooterCss";
const Footer = () => {
  return (
    <FooterCss className="footerBox">
      <div className="footerList">
        <ul className="footerListContact"> <h2>Contatos:</h2> 
          <li className="footerListItem">E-Mail: williamficmoreira@gmail.com</li>
          <li className="footerListItem">Celular: (51) 98225-7616</li>
        </ul>
      </div>

      <div className="footerList">
        <ul className="footerListSocials"> <h2>Redes:</h2> 
          <li className="footerListItem"><a href="https://www.linkedin.com/in/williamficmoreira/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png" className="SocialLogo"></img> Linkedin</a></li>
          <li className="footerListItem"><a href="https://github.com/WilliamFicMoreira" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="SocialLogo"></img> Github</a></li>
          <li className="footerListItem"><a href="https://wa.me/5551982257616" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" className="SocialLogo"></img> WhatsApp</a></li>
          <li className="footerListItem"><a href="https://www.instagram.com/williamficmoreira/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" className="SocialLogo"></img> Instagram</a></li>
        </ul>
      </div>
    </FooterCss>
  );
};

export default Footer;
