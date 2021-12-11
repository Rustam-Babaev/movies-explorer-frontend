import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

export default function Register({ onInfoTooltip, user = "Виталий" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errName, setErrName] = useState("");
  let navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
      setErrEmail(evt.target.validationMessage);
    } else {
      setName(value);
      setErrName(evt.target.validationMessage);
    }
  };

  const handleSignOut = (evt) => {
    //код для удаления токена из кукис
    navigate("/");
  };

  //Отправляем данные нового пользователя на сервер и  в зависимости какой ответ пришел показываем popup confirmation, делаем редирект на страницу входа
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  useEffect(() => {
    setEmail("");
    setName("");
  }, []);

  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <div className="profile">
        <form className="profile__form" name="profile" onSubmit={handleSubmit} noValidate>
          <h1 className="profile__title">Привет, {user}!</h1>
          <div className="profile__input-container">
            <h2 className="profile__input-name">Имя</h2>
            <input
              type="text"
              name="name"
              id="name-input"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
              className="profile__input"
              onChange={handleChange}
              value={name}
            />
          </div>
          <span className="profile__input-error">{errName}</span>
          <div className="profile__underline"></div>
          <div className="profile__input-container">
            <h2 className="profile__input-name">E-mail</h2>
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
              className="profile__input "
              onChange={handleChange}
              value={email}
            />
          </div>
          <span className="profile__input-error">{errEmail}</span>
          <button type="submit" className="profile__submit">
            Редактировать
          </button>
        </form>
        <button type="button" className="profile__signout" onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}
