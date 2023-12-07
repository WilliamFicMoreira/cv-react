import React, {useState} from "react";
import SideNav from "./SideNavBarCss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Persona from "../../Images/P5RWilliam.webp";

const SideNavBar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <SideNav style={{ display: showNav ? 'initial' : 'none' }}>
      <div className="SideNavBox">

        <div className="CloseButton">
          <button href="javascript:void(0)" class="closebtn" onClick={() => setShowNav(false)}>&times;
          </button>
        </div>

        <ul className="itemsList">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        
        {/* <picture>
          <source srcset="./imgs/P5RWilliam.webp" type="image/webp"></source>
        </picture> */}

        <img className="persona-image" src={Persona} alt="teste" />

        <div className="skillList">

          <div className="skillList-item"> Javascript
            <ProgressBar key={1} labelcolor={'black'} fillcolor={'#c9c8c5'} bgcolor={'#e00025'} completed={66} />
          </div>

          <div className="skillList-item"> SQL
            <ProgressBar key={1} labelcolor={'black'} fillcolor={'#c9c8c5'} bgcolor={'#e00025'} completed={80} />
          </div>

          <div className="skillList-item"> SQL
            <ProgressBar key={1} labelcolor={'black'} fillcolor={'#c9c8c5'} bgcolor={'#e00025'} completed={80} />
          </div>

          <div className="skillList-item"> SQL
            <ProgressBar key={1} labelcolor={'black'} fillcolor={'#c9c8c5'} bgcolor={'#e00025'} completed={80} />
          </div>

        </div>

      </div>
    </SideNav>
  );
};

export default SideNavBar;
