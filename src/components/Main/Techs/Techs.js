import React from "react";
import { useSelector } from "react-redux";
import { TECHS__TITLE, TECHS__SUBTITLE, TECHS__PARAGRAPH } from "../../../utils/constants";

function Techs() {
  const language = useSelector((state) => state.language.language);
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">{TECHS__TITLE[language]}</h2>
        <hr className="techs__title-underline" />
        <h3 className="techs__subtitle">{TECHS__SUBTITLE[language]}</h3>
        <p className="techs__paragraph">{TECHS__PARAGRAPH[language]}</p>
        <div className="techs__types-container">
          <span className="techs_type">HTML</span>
          <span className="techs_type">CSS</span>
          <span className="techs_type">JS</span>
          <span className="techs_type">React</span>
          <span className="techs_type">Git</span>
          <span className="techs_type">Express.js</span>
          <span className="techs_type">MongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Techs;
