import Card from "./Card";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  loggedIn,
  loggedOut,
  userEmail,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header
        link="/sign-in"
        headerText={"Выйти"}
        onClick={loggedOut}
        loggedIn={loggedIn}
        login={userEmail}
      />
      <main className="content">
        <section className="profile section content__section">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src={`${currentUser.avatar}`}
              alt="Изображение Жак-Ива Кусто"
            />
            <button
              className="profile__avatar-edit-button"
              type="button"
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить новую карточку"
            onClick={onAddPlace}
          ></button>
        </section>
        <section className="elements section content__section">
          <div className="elements__items">
            {cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;