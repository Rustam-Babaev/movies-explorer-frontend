import React from "react";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Header({ type, children }) {
  const navigate = useNavigate();
  //В зависимости какой пропс передается выстраивается header определенного формата для логина, фильмов или главной страницы
  return (
    <header className={`header ${type === "main" ? "header_type_main" : "header_type_default"}`}>
      <div className={`header__container ${type === "auth" && "header__container_type_auth"}`}>
        <Link to="/">
          <img src={logo} alt="Логотип movies-explorer" className="header__logo" />{" "}
        </Link>
        {type === "auth" ? (
          <h2 class="header__phrase">{children}</h2>
        ) : (
          <div className="header__links-container">
            {type === "main" ? (
              <>
                <Link className="header__link header__link_type_login" to="/sign-up">
                  Регистрация
                </Link>
                <button className="header__link header__button" onClick={() => navigate("/sign-in")}>
                  Войти
                </button>
              </>
            ) : (
              <>{children}</>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
