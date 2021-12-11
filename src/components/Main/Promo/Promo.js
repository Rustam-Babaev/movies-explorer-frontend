import React from "react";
import titleImg from "../../../images/title_img.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={titleImg} alt="Абстрактный рисунок петли" className="promo__img" />
      </div>
    </section>
  );
}

export default Promo;
