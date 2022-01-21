import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, setCurrentUser } from "../../redux/actions";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { apiAuth } from "../../utils/MainApi";
import { useFormWithValidation } from "../../hooks/useFormWithValidation/useFormWithValidation";
import { REG_EMAIL, REG_NAME, MESSAGE_CONFIRM_SAVE, PROFILE__HELLO, NAME, EDIT, SIGN__OUT } from "../../utils/constants";

export default function Profile({ onInfoTooltip }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [values, handleChange, errors, isValid] = useFormWithValidation();
  const { name, email } = values;
  const [submitClassName, setSubmitClassName] = useState("profile__submit_dissable");
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
    if (isValid && !(currentUser.name === name && currentUser.email === email)) {
      apiAuth
        .editProfileRequest(name, email)
        .then((res) => {
          dispatch(setCurrentUser(res));
          onInfoTooltip(true, MESSAGE_CONFIRM_SAVE[language]);
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
    if (isValid && !(currentUser.name === name && currentUser.email === email)) {
      setSubmitClassName("profile__submit");
    } else {
      setSubmitClassName("profile__submit profile__submit_dissable");
    }
  }, [currentUser.email, currentUser.name, email, isValid, name]);

  useEffect(() => {
    handleChange({}, true);
  }, [currentUser]);
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>
      <div className="profile">
        <form className="profile__form" name="profile" onSubmit={handleSubmit} noValidate>
          <h1 className="profile__title">
            {PROFILE__HELLO[language]}, {currentUser.name}!
          </h1>
          <div className="profile__input-container">
            <h2 className="profile__input-name">{NAME[language]}</h2>
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
              value={name || ""}
              pattern={REG_NAME}
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
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
              className="profile__input "
              onChange={handleChange}
              value={email || ""}
              pattern={REG_EMAIL}
            />
          </div>
          <span className="profile__input-error">{errors.email}</span>
          <button type="submit" className={submitClassName}>
            {EDIT[language]}
          </button>
        </form>
        <button type="button" className="profile__signout" onClick={handleSignOut}>
          {SIGN__OUT[language]}
        </button>
      </div>
    </>
  );
}
