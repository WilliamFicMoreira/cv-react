import React from "react";
import Nav from "./NavBarCss";
import Autor from "../../Images/cv-autor.jpg";
import SideNavButton from "../../Images/p5_joker_mask_vector.svg";

const NavBar = () => {
  return (
    <Nav>
      <div className="NavBox">
        
      <div className="SideNavButton">
        <img src={SideNavButton} alt="React Logo" />
        <h5>Persona Menu</h5>
      </div> 

        <div className="Author">
          <img src={Autor} alt="foto do autor"></img>
        </div>

        <div className="Menu">
          <ul className="MenuLista">
            <li className="MenuListaItem1">Home</li>
            <li className="MenuListaItem2">TESTESTESTESE</li>
            <li className="MenuListaItem3">item 3</li>
            <li className="MenuListaItem4">item 4</li>
            <li className="MenuListaItem5">item 5</li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
