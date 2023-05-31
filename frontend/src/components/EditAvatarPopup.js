import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isRenderLoading }) {
  const avatarRef = useRef("");

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="popup-edit-avatar"
      title="Обновить аватар"
      buttonName={isRenderLoading ? "Сохранение..." : "Сохранить"}
    >
      <label className="popup__form-field">
        <input
          type="url"
          id="avatar-image-link"
          name="avatar"
          placeholder="Ссылка на новое фото"
          className="popup__item popup__item_input-avatar-link"
          required
          ref={avatarRef}
        />
        <span className="error" id="avatar-image-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;