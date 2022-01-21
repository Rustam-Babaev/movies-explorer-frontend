import React from "react";
import { useSelector } from "react-redux";
import { ABOUT_PROJECT_TITLE, ABOUT_PROJECT_TITLE_DURATION, ABOUT_PROJECT_PARAGRAPH_DURATION } from "../../../utils/constants";

function AboutProject() {
  const language = useSelector((state) => state.language.language);
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">{ABOUT_PROJECT_TITLE[language]}</h2>
        <hr className="about-project__title-underline" />
        <div className="about-project__duration-container">
          <h3 className="about-project__title-duration">{ABOUT_PROJECT_TITLE_DURATION[0][language]}</h3>
          <p className="about-project__paragraph-duration">{ABOUT_PROJECT_PARAGRAPH_DURATION[0][language]}</p>
          <h3 className="about-project__title-duration">{ABOUT_PROJECT_TITLE_DURATION[1][language]}</h3>
          <p className="about-project__paragraph-duration">{ABOUT_PROJECT_PARAGRAPH_DURATION[1][language]}</p>
        </div>
        <div className="about-project__timeline-container">
          <span className="about-project__timeline about-project__timeline_color_green">1 week</span>
          <span className="about-project__timeline">Back-end</span>
          <span className="about-project__timeline about-project__timeline_color_grey">4 weeks</span>
          <span className="about-project__timeline">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
