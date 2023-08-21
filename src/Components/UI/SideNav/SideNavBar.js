import React, { useState } from "react";
import SideNav from "./SideNavBarCss";
import ProgressBar from "../ProgressBar/ProgressBar";

const SideNavBar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <SideNav style={{ display: showNav ? 'initial' : 'none' }}>
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

        <div className="skillList">

          <div className="skillList-item"> Javascript
            <ProgressBar key={1} bgcolor={"#6a1b9a"} completed={75} />
          </div>

        </div>

      </div>
    </SideNav>
  );
};


export default SideNavBar;
