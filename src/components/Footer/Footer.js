/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { FOOTER__TITLE } from "../../utils/constants";

function Footer() {
  const language = useSelector((state) => state.language.language);
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">{FOOTER__TITLE[language]}</h2>
        <hr className="footer__underline" />
        <div className="footer__underline-container">
          <span className="footer__copyright">&#169; 2021</span>
          <ul className="footer__links-container">
            <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
              <li>Яндекс.Практикум</li>
            </a>
            <a className="footer__link" href="https://github.com/Rustam-Babaev" target="_blank" rel="noreferrer">
              <li>Github</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
