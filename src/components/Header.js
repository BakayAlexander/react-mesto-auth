import React from 'react';
import { Link } from 'react-router-dom';
import logoPic from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header page__container-header">
      <img className="header__logo" src={logoPic} alt="Логотип проекта" />
      {/* <Link></Link> */}
    </header>
  );
}

export default Header;
