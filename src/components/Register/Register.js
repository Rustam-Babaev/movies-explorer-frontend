import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormWithValidation/useFormWithValidation";
import { apiAuth } from "../../utils/MainApi";

export default function Register({ onInfoTooltip }) {
  let navigate = useNavigate();
  const [values, handleChange, errors, isValid, resetForm] = useFormWithValidation();
  const { name, email, password } = values;
  const [submitClassName, setSubmitClassName] = useState("login__submit login__submit_type_register login__submit_disable");

  // Отправляем данные нового пользователя на сервер и  в зависимости какой ответ пришел показываем popup confirmation, делаем редирект на страницу входа
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      apiAuth
        .register(email, password, name)
        .then(() => {
          onInfoTooltip(true);
          resetForm();
          setTimeout(navigate("/sign-in"), 1000);
        })
        .catch((e) => {
          onInfoTooltip(false, e.message);
          console.log(e);
        });
    }
  };

  useEffect(() => {
    isValid
      ? setSubmitClassName("login__submit login__submit_type_register")
      : setSubmitClassName("login__submit login__submit_type_register login__submit_disable");
  }, [isValid]);

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
          value={name || ""}
          pattern="[A-Za-zА-Яа-яЁё -]+$"
        />
        <span className="login__input-error">{errors.name}</span>
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
