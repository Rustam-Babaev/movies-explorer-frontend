import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/actions";

function Header({ type, children }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  return (
    <header className={`header ${type === "main" ? "header_type_main" : "header_type_default"}`}>
      <div className={`header__container ${type === "auth" && "header__container_type_auth"}`}>
        <Link to="/">
          <img src={logo} alt="Логотип movies-explorer" className="header__logo" />{" "}
        </Link>
        {type === "auth" ? (
          <h2 className="header__phrase"> {children}</h2>
        ) : (
          <div className="header__links-container">
            {" "}
            <button
              className={language === "en" ? "header__language-button header__language-button_active" : "header__language-button"}
              onClick={() => {
                dispatch(setLanguage("en"));
              }}
            >
              En
            </button>
            <button
              className={language === "ru" ? "header__language-button header__language-button_active" : "header__language-button"}
              onClick={() => {
                dispatch(setLanguage("ru"));
              }}
            >
              Ru
            </button>
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
