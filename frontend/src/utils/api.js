class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  setToken(token) {
    this._headers = {
      ...this._headers,
      Authorization: `Bearer ${token}`,
    };
  }

  getUserProfileInfo() {
    this._userProfileInfo = fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
    return this._userProfileInfo;
  }

  getInitialCards() {
    this._initialCards = fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
    return this._initialCards;
  }

  editProfileInfo(profileInfo) {
    this._editedProfileInfo = fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: profileInfo.name,
        about: profileInfo.about,
      }),
    }).then(this._checkResponse);
    return this._editedProfileInfo;
  }

  addNewCards(name, link) {
    this._newCards = fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkResponse);
    return this._newCards;
  }

  likeCard(like) {
    this._addedLike = fetch(`${this._url}/cards/${like._id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
    return this._addedLike;
  }

  removeLikeCard(like) {
    this._removedLike = fetch(`${this._url}/cards/${like._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
    return this._removedLike;
  }

  changeLikeCardStatus(cardId, isLiked) {
    this._likedCard = fetch(`${this._url}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
    return this._likedCard;
  }

  deleteCard(id) {
    this._deletedCard = fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
    return this._deletedCard;
  }

  updateAvatar(imageLink) {
    this._updatedAvatar = fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: imageLink.avatar,
      }),
    }).then(this._checkResponse);
    return this._updatedAvatar;
  }
}

export const api = new Api({
  url: "https://api.mesto.react.15.nomoredomains.monster",
  headers: {
    /*authorization: "bbfe3381-78a1-420d-846d-3c7932cfb849",*/ //убираем токен
    "Content-Type": "application/json",
  },
});