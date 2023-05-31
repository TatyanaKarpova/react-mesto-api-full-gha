import React from "react";

function PopupWithForm({
  name,
  isOpen,
  title,
  children,
  buttonName,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup ${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container" name={name}>
        <h2 className="popup__heading">{title}</h2>
        <form
          name={`popup-form-${name}`}
          className="popup__form"
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__button">
            {buttonName}
          </button>
        </form>
        <button
          type="button"
          className="popup__close-icon"
          aria-label="Закрыть попап"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;