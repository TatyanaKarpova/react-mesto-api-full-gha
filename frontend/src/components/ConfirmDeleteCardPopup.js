import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup({
  isOpen,
  card,
  onClose,
  onDeleteCard,
  isRenderLoading,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="popup-delet-card"
      title="Вы уверены?"
      buttonName={isRenderLoading ? "Удаление..." : "Да"}
    />
  );
}

export default ConfirmDeleteCardPopup;