import React from "react";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <hr className="techs__title-underline" />
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__types-container">
          <span className="techs_type">HTML</span>
          <span className="techs_type">CSS</span>
          <span className="techs_type">JS</span>
          <span className="techs_type">React</span>
          <span className="techs_type">Git</span>
          <span className="techs_type">Express.js</span>
          <span className="techs_type">mongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Techs;
