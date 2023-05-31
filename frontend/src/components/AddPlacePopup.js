import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isRenderLoading }) {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  useEffect(() => {
    setPlaceName("");
    setPlaceLink("");
  }, [isOpen]);

  function handlePlaceNameChange(evt) {
    setPlaceName(evt.target.value);
  }

  function handlePlaceLinkChange(evt) {
    setPlaceLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup-add-place"
      title="Новое место"
      buttonName={isRenderLoading ? "Создание..." : "Создать"}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-field">
        <input
          type="text"
          id="card-name"
          name="name"
          placeholder="Название"
          className="popup__item popup__item_input_card-name"
          required
          minLength="2"
          maxLength="30"
          onChange={handlePlaceNameChange}
          value={placeName}
        />
        <span className="error" id="card-name-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          type="url"
          id="card-photo-url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__item popup__item_input_card-photo-url"
          required
          onChange={handlePlaceLinkChange}
          value={placeLink}
        />
        <span className="error" id="card-photo-url-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;