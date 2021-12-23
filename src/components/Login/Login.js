import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormWithValidation/useFormWithValidation";
import { REG_EMAIL } from "../../utils/constants";

export default function Login({ onLogin }) {
  const [values, handleChange, errors, isValid] = useFormWithValidation();
  const { email, password } = values;
  const [submitClassName, setSubmitClassName] = useState("login__submit login__submit_disable");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      onLogin(email, password);
    }
  };

  useEffect(() => {
    isValid ? setSubmitClassName("login__submit") : setSubmitClassName("login__submit login__submit_disable");
  }, [isValid]);

  return (
    <div className="login">
      <Header type="auth">Рады видеть!</Header>

      <form className="login__form" name="login" onSubmit={handleSubmit} noValidate>
        <h3 className="login__input-name">E-mail</h3>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
          className="login__input "
          onChange={handleChange}
          value={email || ""}
          pattern={REG_EMAIL}
        />
        <span className="login__input-error">{errors.email}</span>
        <h3 className="login__input-name">Пароль</h3>
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Password"
          minLength="2"
          maxLength="200"
          required
          className="login__input "
          onChange={handleChange}
          value={password || ""}
        />
        <span className="login__input-error">{errors.password}</span>
        <button type="submit" className={submitClassName}>
          Войти
        </button>
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link className="login__link" to="/sign-up">
            Регистрация
          </Link>
        </p>
      </form>
    </div>
  );
}
