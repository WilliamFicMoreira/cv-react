import React from "react";
import MainContent from "./Content/MainContent/MainContent";
import Footer from "./UI/Footer/Footer";
import NavBar from "./UI/NavBar/NavBar";
import SideNavBar from "./UI/SideNav/SideNavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <SideNavBar />
      <MainContent />
      <Footer />
    </>
  );
};

export default Main;
