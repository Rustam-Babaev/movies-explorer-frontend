import React from "react";
import titleImg from "../../../images/title_img.svg";
import { useSelector } from "react-redux";
import { PROMO_TITLE } from "../../../utils/constants";

function Promo() {
  const language = useSelector((state) => state.language.language);
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">{PROMO_TITLE[language]}</h1>
        <img src={titleImg} alt="Абстрактный рисунок петли" className="promo__img" />
      </div>
    </section>
  );
}

export default Promo;
