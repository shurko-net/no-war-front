import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Nowar
        </Link>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/" className="menu__link">
                Про фонд
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/" className="menu__link">
                Збори
              </Link>
              <div className="menu__icon" />
            </li>
            <li className="menu__item">
              <Link to="/" className="menu__link">
                Звітність
              </Link>
              <div className="menu__icon" />
            </li>
          </ul>
        </nav>
        <div className="header__button button">
          <Link to="/" className="button__link">
            <div className="button__icon" />
            <span className="button__text">Увійти</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
