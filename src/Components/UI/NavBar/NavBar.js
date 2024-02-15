import React, { useState } from "react";
import Nav from "./NavBarCss";
import SideNavButton from "../../Images/Phantom-Thieves-Logo-2.svg";
import SideNavBar from "../SideNav/SideNavBar";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Nav>
      <div className="NavBox">
        {/* Botão para controlorar o state */}
        <div className="SideNavButton" onClick={() => setIsShown(!isShown)}>
          <img src={SideNavButton} alt="Logo" />
          <h5>Menu</h5>
        </div>

        {/* Passa o state como props para o sidenavbar */}
        <SideNavBar showNav={isShown} setShowNav={setIsShown}/>

        <div className="Menu">
          <ul className="MenuLista">
            <li className="MenuListaBotao-2">Home</li>
            <li className="MenuListaBotao-1">teste</li>
            <li className="MenuListaBotao-2">item 3</li>
            <li className="MenuListaBotao-1">item 4</li>
            <li className="MenuListaBotao-2">item 5</li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar; 
