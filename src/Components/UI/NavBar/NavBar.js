import React from "react";
import Nav from "./NavBarCss";
import SideNavButton from "../../Images/p5_joker_mask_vector.svg";

const NavBar = () => {
  return (
    <Nav>
      <div className="NavBox">
        
      <div className="SideNavButton">
        <img src={SideNavButton} alt="React Logo" />
        <h5>Persona Menu</h5>
      </div> 

        <div className="Menu">
          <ul className="MenuLista">
            <li className="MenuListaBotao-1">Home</li>
            <li className="MenuListaBotao-2">teste</li>
            <li className="MenuListaBotao-1">item 3</li>
            <li className="MenuListaBotao-2">item 4</li>
            <li className="MenuListaBotao-1">item 5</li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
