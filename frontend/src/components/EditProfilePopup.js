import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isRenderLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="popup-edit-profile"
      title="Редактировать профиль"
      buttonName={isRenderLoading ? "Сохранение..." : "Сохранить"}
    >
      <label className="popup__form-field">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          className="popup__item popup__item_input_name"
          required
          minLength="2"
          maxLength="40"
          value={name || ""}
          onChange={handleNameChange}
        />
        <span className="error" id="name-error"></span>
      </label>
      <label className="popup__form-field">
        <input
          type="text"
          id="occupation"
          name="about"
          placeholder="О себе"
          className="popup__item popup__item_input_occupation"
          required
          minLength="2"
          maxLength="200"
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        <span className="error" id="occupation-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;