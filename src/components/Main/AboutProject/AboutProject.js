import React from "react";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <hr className="about-project__title-underline" />
        <div className="about-project__duration-container">
          <h3 className="about-project__title-duration">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph-duration">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
          <h3 className="about-project__title-duration">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph-duration">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__timeline-container">
          <span className="about-project__timeline about-project__timeline_color_green">1 неделя</span>
          <span className="about-project__timeline">Back-end</span>
          <span className="about-project__timeline about-project__timeline_color_grey">4 недели</span>
          <span className="about-project__timeline">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
