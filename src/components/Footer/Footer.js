/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <hr className="footer__underline" />
        <div className="footer__underline-container">
          <span className="footer__copyright">&#169; 2020</span>
          <ul className="footer__links-container">
            <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
              <li>Яндекс.Практикум</li>
            </a>
            <a className="footer__link" href="https://github.com/Rustam-Babaev/movies-explorer-frontend" target="_blank" rel="noreferrer">
              <li>Github</li>
            </a>
            <a className="footer__link" href="#" target="_blank">
              <li>Facebook</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
