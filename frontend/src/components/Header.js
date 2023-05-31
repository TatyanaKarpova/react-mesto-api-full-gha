import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logo.svg";

function Header({ login, link, onClick, loggedIn, headerText }) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function handleMenuClick() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <header className="header section">
      {loggedIn ? (
        <div className="header__container header__container_mobile">
          <div className="logo-container">
            <img className="header__logo" src={headerLogo} alt="Лого" />
            <button
              type="button"
              className={`header__menu-button_desktop ${
                isMenuClicked
                  ? "header__menu-button_invisible"
                  : "header__menu-button"
              }`}
              onClick={handleMenuClick}
            ></button>
            <button
              type="button"
              className={`${
                isMenuClicked
                  ? "header__close-button"
                  : "header__close-button_invisible"
              }`}
              onClick={handleMenuClick}
            ></button>
          </div>
          <div
            className={`header__wrapper ${
              isMenuClicked ? "header__wrapper_mobile" : ""
            }`}
          >
            <p className="header__login">{login}</p>
            <Link
              to={link}
              className={`${
                isMenuClicked ? "header__link_mobile" : "header__link"
              }`}
              onClick={onClick}
            >
              {headerText}
            </Link>
          </div>
        </div>
      ) : (
        <div className="header__container">
          <div className="">
            <img className="header__logo" src={headerLogo} alt="Лого" />
            <button
              type="button"
              className="header__menu-button_invisible"
              onClick={handleMenuClick}
            ></button>
            <button
              type="button"
              className="header__close-button_invisible"
              onClick={handleMenuClick}
            ></button>
          </div>
          <div className="header__container">
            <p className="header__login">{login}</p>
            <Link to={link} className="header__link" onClick={onClick}>
              {headerText}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;