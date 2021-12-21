import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, setCurrentUser } from "../../redux/actions";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { apiAuth } from "../../utils/MainApi";
import { useFormWithValidation } from "../../hooks/useFormWithValidation/useFormWithValidation";

export default function Profile({ onInfoTooltip }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [values, handleChange, errors, isValid] = useFormWithValidation();
  const { name, email } = values;
  const [submitClassName, setSubmitClassName] = useState("profile__submit");
  let navigate = useNavigate();

  const handleSignOut = (evt) => {
    apiAuth
      .signout()
      .then(() => {
        dispatch(loggedIn(false));
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      apiAuth
        .editProfileRequest(name, email)
        .then((res) => {
          dispatch(setCurrentUser(res));
          onInfoTooltip(true, "Данные успешно сохранились");
        })
        .catch((err) => {
          err.json().then((err) => {
            onInfoTooltip(false, err.message);
            console.log(err);
          });
        });
    }
  };

  useEffect(() => {
    isValid ? setSubmitClassName("profile__submit") : setSubmitClassName("profile__submit profile__submit_dissable");
  }, [isValid]);

  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <div className="profile">
        <form className="profile__form" name="profile" onSubmit={handleSubmit} noValidate>
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <div className="profile__input-container">
            <h2 className="profile__input-name">Имя</h2>
            <input
              type="text"
              name="name"
              id="name-input"
              placeholder={currentUser.name}
              minLength="2"
              maxLength="40"
              required
              className="profile__input"
              onChange={handleChange}
              value={name || ""}
            />
          </div>
          <span className="profile__input-error">{errors.name}</span>
          <div className="profile__underline"></div>
          <div className="profile__input-container">
            <h2 className="profile__input-name">E-mail</h2>
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder={currentUser.email}
              minLength="2"
              maxLength="40"
              required
              className="profile__input "
              onChange={handleChange}
              value={email || ""}
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
          <button type="submit" className={submitClassName}>
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
