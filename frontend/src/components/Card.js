import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = `element__delete-button ${
    isOwn ? "element__delete-button_active" : "element__delete-button_hidden"
  }`;

  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={card.link}
        onClick={handleClick}
        alt={card.name}
      />
      <div className="element__bottom-item">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-number">{card.likes.length}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
    </article>
  );
}

export default Card;