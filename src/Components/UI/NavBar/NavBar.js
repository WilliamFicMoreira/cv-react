import React, { useState } from "react";
import Nav from "./NavBarCss";
import SideNavButton from "../../Images/Phantom-Thieves-Logo-2.svg";
import SideNavBar from "../SideNav/SideNavBar";

const NavBar = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <Nav>
      <div className="NavBox">
        <div className="SideNavButton" onClick={handleClick}>
          <img src={SideNavButton} alt="Logo" />
          <h5>Menu</h5>
        </div>

        {/* 👇️ show elements on click */}
        {/* {isShown && (
            // may add more elements here
          )} */}

        {/* 👇️ show component on click */}
        {isShown && <SideNavBar />}

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
