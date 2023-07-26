import React, {useState} from "react";
import SideNav from "./SideNavBarCss";

const SideNavBar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <SideNav style={{display: showNav ? 'initial' : 'none'}}>
      <div className="SideNavBox">

        <div className="CloseButton">
          <button href="javascript:void(0)" class="closebtn" onClick={() => setShowNav(false)}>&times;</button>
        </div>
        
        <ul className="itemsList">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </SideNav>
  );
};


export default SideNavBar;
