import React from 'react';
import { useHistory } from 'react-router-dom';
import logoPic from '../images/logo.svg';

function Header(props) {
  const history = useHistory();

  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }
  return (
    <header className="header page__container-header">
      <img className="header__logo" src={logoPic} alt="Логотип проекта" />
      <div className="header__user-container">
        <p className="header__user-email">{props.email}</p>
        <button className="header__button" onClick={signOut}>
          Выйти
        </button>
      </div>
    </header>
  );
}

export default Header;
