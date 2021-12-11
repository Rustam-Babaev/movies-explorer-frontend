import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <hr className="about-me__title-underline" />
        <div className="about-me__description-container">
          <div className="about-me__text-description-container">
            <h3 className="about-me__name">Рустам Бабаев</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 29 лет</p>
            <p className="about-me__description">
              Я вырос в городе Перми. Закончил ПГГПУ по специальности информационные системы и технологии. Последние 5 лет работал в сфере
              туризма, сейчас поставил себе задачу войти в сферу IT, так как с детства увлекаюсь технологиями и хочу быть частью этого
              сообщества. Последние 10 месяцев прохожу обучение в яндекс.Практикуме.
            </p>
            <div className="about-me__social-links-container">
              <Link className="about-me__social-link" to="#">
                Facebook
              </Link>
              <Link className="about-me__social-link" to="#">
                Github
              </Link>
            </div>
          </div>
          <img src={avatar} alt="Портрет стадента" className="about-me__avatar" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
