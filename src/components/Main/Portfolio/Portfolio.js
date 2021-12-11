import React from "react";

function Profolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects-container">
        <li className="portfolio__project-container">
          <h3 className="portfolio__project-name">Статичный сайт</h3>
          <a target="_blank" href="https://github.com/Rustam-Babaev/how-to-learn" rel="noreferrer">
            <div className="portfolio__project-link"></div>
          </a>
        </li>
        <hr className="portfolio__project-underline" />
        <li className="portfolio__project-container">
          <h3 className="portfolio__project-name">Адаптивный сайт</h3>
          <a target="_blank" href="https://github.com/Rustam-Babaev/russian-travel" rel="noreferrer">
            <div className="portfolio__project-link"></div>
          </a>
        </li>
        <hr className="portfolio__project-underline" />
        <li className="portfolio__project-container">
          <h3 className="portfolio__project-name">Одностраничное приложение</h3>
          <a target="_blank" href="http://mesto.rustam-babaev.nomoredomains.xyz/" rel="noreferrer">
            <div className="portfolio__project-link"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Profolio;
