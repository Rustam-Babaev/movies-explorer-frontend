import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Register({ onInfoTooltip }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errName, setErrName] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
      setErrEmail(evt.target.validationMessage);
    } else if (name === "password") {
      setPassword(value);
      setErrPassword(evt.target.validationMessage);
    } else {
      setName(value);
      setErrName(evt.target.validationMessage);
    }
  };

  //Отправляем данные нового пользователя на сервер и  в зависимости какой ответ пришел показываем popup confirmation, делаем редирект на страницу входа
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, []);

  return (
    <div className="login">
      <Header type="auth">Добро пожаловать!</Header>

      <form className="login__form" name="login" onSubmit={handleSubmit} noValidate>
        <h3 className="login__input-name">Имя</h3>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
          className="login__input"
          onChange={handleChange}
          value={name}
        />
        <span className="login__input-error">{errName}</span>
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
        <button type="submit" className="login__submit login__submit_type_register">
          Зарегистрироваться
        </button>
        <p className="login__text">
          Уже зарегистрированы?
          <Link className="login__link" to="/sign-in">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}
