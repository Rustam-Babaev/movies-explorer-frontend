import React from "react";
import Header from "../Header/Header";
import Promo from "../Main/Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutME from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header type="main"></Header>
      <main>
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutME></AboutME>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Main;
