import React from "react";
import { useSelector } from "react-redux";
import { PORTFOLIO__TITLE, PORTFOLIO__PROJECTS } from "../../../utils/constants";

function Profolio() {
  const language = useSelector((state) => state.language.language);
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">{PORTFOLIO__TITLE[language]}</h2>
      <ul className="portfolio__projects-container">
        <li className="portfolio__project-container">
          <h3 className="portfolio__project-name">{PORTFOLIO__PROJECTS[0][language]}</h3>
          <a target="_blank" href="https://github.com/Rustam-Babaev/how-to-learn" rel="noreferrer">
            <div className="portfolio__project-link"></div>
          </a>
        </li>
        <hr className="portfolio__project-underline" />
        <li className="portfolio__project-container">
          <h3 className="portfolio__project-name">{PORTFOLIO__PROJECTS[1][language]}</h3>
          <a target="_blank" href="https://github.com/Rustam-Babaev/russian-travel" rel="noreferrer">
            <div className="portfolio__project-link"></div>
          </a>
        </li>
        <hr className="portfolio__project-underline" />
        <li className="portfolio__project-container">
          <h3 className="portfolio__project-name">{PORTFOLIO__PROJECTS[2][language]}</h3>
          <a target="_blank" href="http://mesto.rustam-babaev.nomoredomains.xyz/" rel="noreferrer">
            <div className="portfolio__project-link"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Profolio;
