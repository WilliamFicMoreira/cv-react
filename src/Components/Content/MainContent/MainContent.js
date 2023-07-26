import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Experiences from "../Experiences/Experiences";
import Courses from "../Courses/Courses";
import Main from "./MainContentCss";

const MainContent = () => {
  return (
    <Main>
      <AboutMe />
      <Experiences />
      <Courses />
    </Main>
  );
};

export default MainContent;
