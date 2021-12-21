import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ type, children }) {
  //В зависимости какой пропс передается выстраивается header определенного формата для логина, фильмов или главной страницы
  return (
    <header className={`header ${type === "main" ? "header_type_main" : "header_type_default"}`}>
      <div className={`header__container ${type === "auth" && "header__container_type_auth"}`}>
        <Link to="/">
          <img src={logo} alt="Логотип movies-explorer" className="header__logo" />{" "}
        </Link>
        {type === "auth" ? <h2 className="header__phrase">{children}</h2> : <div className="header__links-container">{children}</div>}
      </div>
    </header>
  );
}

export default Header;
