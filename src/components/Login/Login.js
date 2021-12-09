import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
      setErrEmail(evt.target.validationMessage);
    } else {
      setPassword(value);
      setErrPassword(evt.target.validationMessage);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

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
          value={email}
        />
        <span className="login__input-error">{errEmail}</span>
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
          value={password}
        />
        <span className="login__input-error">{errPassword}</span>
        <button type="submit" className="login__submit ">
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
