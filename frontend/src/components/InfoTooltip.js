import React from "react";
import registrationSuccess from "../images/reg-success.svg";
import registrationFailure from "../images/reg-fail.svg";

function InfoTooltip({
  isOpen,
  onClose,
  isRegistrationSuccess,
  regSuccessful,
  regFailed,
}) {
  return (
    <div className={`popup popup__registration ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <img
          className="popup__registration-image"
          src={`${
            isRegistrationSuccess ? registrationSuccess : registrationFailure
          }`}
          alt="Изображение статуса регистрации"
        ></img>
        <h3 className="popup__heading popup__registration-heading">
          {`${isRegistrationSuccess ? regSuccessful : regFailed}`}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;