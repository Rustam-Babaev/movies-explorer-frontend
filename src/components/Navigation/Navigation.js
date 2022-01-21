import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HOME, MOVIES, MY__MOVIES, ACCOUNT } from "../../utils/constants";

function Navigation() {
  const language = useSelector((state) => state.language.language);
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
            {HOME[language]}
          </NavLink>
          <NavLink className={handlerActiveLink} to="/movies">
            {MOVIES[language]}
          </NavLink>
          <NavLink className={handlerActiveLink} to="/saved-movies">
            {MY__MOVIES[language]}
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
              {ACCOUNT[language]}
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
