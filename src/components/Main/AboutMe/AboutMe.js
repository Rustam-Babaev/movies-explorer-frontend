import React from "react";
import avatar from "../../../images/avatar.jpg";
import { useSelector } from "react-redux";
import { ABOUTME__TITLE, NAME__SURNAME, ABOUTME__PROFFESION, ABOUTME__DESCRIPTION } from "../../../utils/constants";

function AboutMe() {
  const language = useSelector((state) => state.language.language);
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">{ABOUTME__TITLE[language]}</h2>
        <hr className="about-me__title-underline" />
        <div className="about-me__description-container">
          <div className="about-me__text-description-container">
            <h3 className="about-me__name">{NAME__SURNAME[language]}</h3>
            <p className="about-me__profession">{ABOUTME__PROFFESION[language]}</p>
            <p className="about-me__description">{ABOUTME__DESCRIPTION[language]}</p>
            <div className="about-me__social-links-container">
              <a className="about-me__social-link" href="https://github.com/Rustam-Babaev" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </div>
          <img src={avatar} alt="Портрет стадента" className="about-me__avatar" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
