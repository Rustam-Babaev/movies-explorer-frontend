import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const handlerActiveLink = ({ isActive }) => {
    if (isActive) {
      return "navigation__link navigation__link_is-active";
    } else {
      return "navigation__link";
    }
  };
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  return (
    <>
      <div className={isOpenBurger ? "navigation navigation_visibility_visible" : "navigation navigation_visibility_hidden"}>
        <div className="navigation__container">
          <button className="navigation__close-button" onClick={() => setIsOpenBurger(false)} />
          <NavLink
            className={({ isActive }) => {
              if (isActive) {
                return "navigation__link navigation__link_type_main navigation__link_is-active";
              } else {
                return "navigation__link navigation__link_type_main";
              }
            }}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink className={handlerActiveLink} to="/movies">
            Фильмы
          </NavLink>
          <NavLink className={handlerActiveLink} to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
          <div className="navigation__accaunt-container">
            <NavLink
              className={({ isActive }) => {
                if (isActive) {
                  return "navigation__link_type_accaunt-name navigation__link_is-active";
                } else {
                  return "navigation__link_type_accaunt-name";
                }
              }}
              to="/profile"
            >
              Аккаунт
            </NavLink>
            <div className="navigation__accaunt-icon"></div>
          </div>
        </div>
      </div>
      <button
        className="navigation__burger-icon"
        onClick={() => {
          setIsOpenBurger(true);
        }}
      ></button>
    </>
  );
}

export default Navigation;
