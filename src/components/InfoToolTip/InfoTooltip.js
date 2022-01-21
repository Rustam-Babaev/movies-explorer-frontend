import React from "react";
import { useSelector } from "react-redux";
import confirm from "../../images/confirm.svg";
import reject from "../../images/rejected.svg";
import { MESSAGE_AUTH_CONFIRM, MESSAGE_AUTH_REJECT } from "../../utils/constants";

export default function InfoTooltip({ isConfirm, onClose, isOpen, message }) {
  const language = useSelector((state) => state.language.language);
  const popupClassName = isOpen ? "popup popup_opened" : "popup";
  const messageText = message ? message : isConfirm ? MESSAGE_AUTH_CONFIRM[language] : MESSAGE_AUTH_REJECT[language];
  return (
    <div className={popupClassName}>
      <div className="popup__container">
        <img
          loading="lazy"
          src={isConfirm ? confirm : reject}
          alt={isConfirm ? "confirm" : "reject"}
          className="popup__image popup__image_type_confirmation"
        />
        <h2 className="popup__title popup__title_type_confirmation">{messageText}</h2>
        <button type="button" aria-label="Закрыть" className="popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}
