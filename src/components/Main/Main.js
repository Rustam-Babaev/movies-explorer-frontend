import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Promo from "../Main/Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutME from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import { REGISTRATION, LOGIN } from "../../utils/constants";

function Main() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const language = useSelector((state) => state.language.language);
  const navigate = useNavigate();
  return (
    <>
      {isLoggedIn ? (
        <Header type="main">
          <Navigation></Navigation>
        </Header>
      ) : (
        <Header type="main">
          <Link className="main_header-link-login" to="/sign-up">
            {REGISTRATION[language]}
          </Link>
          <button className="main__header-button" onClick={() => navigate("/sign-in")}>
            {LOGIN[language]}
          </button>
        </Header>
      )}

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
