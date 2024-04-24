import React, { useState } from "react";
import SideNav from "./SideNavBarCss";
import ProgressBar from "../ProgressBar/ProgressBar";
import Persona from "../../Images/P5RWilliam.webp";

const SideNavBar = ({ showNav, setShowNav }) => {
  return (
    // mudar de "inline" para "none" depois de fazer os ajustes no sidenavbar
    <SideNav style={{ display: showNav ? "initial" : "none" }}>
      <div className="SideNavBox">
        <div className="CloseButton">
          <button class="CloseBtn" onClick={() => setShowNav(false)}>
            <span class="CloseIcon">&times;</span>
          </button>
        </div>

        <div className="SideNavTitle">
          <h1>Persona</h1>
        </div>

        <div className="SideNavPersona">
          <div className="SideNavPersonaTitle">
            <h3>Arcana: "O Carro"</h3>
            <h5>Nome: William</h5>
          </div>
          
          <div className="SideNavPeronsaImage">
            <img src={Persona} alt="William Persona" />
            <h5>
              Características: Motivação, força de vontade e honestidade que
              impulsionam o progresso contínuo do indivíduo.
            </h5>
          </div>
        </div>

        <div className="skillList">
          <div className="skillList-item">
            <h4>JS</h4>
            <ProgressBar
              key={1}
              labelcolor={"black"}
              fillcolor={"#c9c8c5"}
              bgcolor={"#e00025"}
              completed={80}
            />
          </div>

          <div className="skillList-item">
            <h4>SQL</h4>
            <ProgressBar
              key={1}
              labelcolor={"black"}
              fillcolor={"#c9c8c5"}
              bgcolor={"#e00025"}
              completed={92}
            />
          </div>

          <div className="skillList-item">
            <h4>SQL</h4>
            <ProgressBar
              key={1}
              labelcolor={"black"}
              fillcolor={"#c9c8c5"}
              bgcolor={"#e00025"}
              completed={60}
            />
          </div>

          <div className="skillList-item">
            <h4>SQL</h4>
            <ProgressBar
              key={1}
              labelcolor={"black"}
              fillcolor={"#c9c8c5"}
              bgcolor={"#e00025"}
              completed={30}
            />
          </div>
        </div>
      </div>
    </SideNav>
  );
};

export default SideNavBar;
