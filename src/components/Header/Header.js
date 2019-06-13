// NPM MODULES
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
// CONTEXT
import ContentContext from '../../context/content-context';
// STYLES
import './Header.css';

const Header = () => {
  const { content } = useContext(ContentContext);

  return (
    <header className="content-container">
      <nav className="header__nav_bar">
        <Link className="header__nav_bar__link" to="/">Navigation here</Link>
        <Link className="header__nav_bar__link" to="/">About Us</Link>
      </nav>
      <div className="header__logo">
        <img className="header__logo__image" src={content.headerLogo.logo} alt="Learn logo" />
      </div>
    </header>
  )
};

export default Header;