import React from "react";

function ImagePopup({ isOpen, card, onClose }) {
  return (
    <div className={`popup popup-image-background ${isOpen && "popup_opened"}`}>
      <figure className="popup__figure">
        <img className="popup__image" src={`${card.link}`} alt={card.name} />
        <button
          type="button"
          className="popup__close-icon"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <figcaption className="popup__figcaption">{card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;