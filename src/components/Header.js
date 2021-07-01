import React from 'react';
import '../styles/style.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header" data-testid="header">
    <Link to="/" className="logo">
      Math Magicians
    </Link>
    <div className="header__links">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/calculator">
        Calculator
      </NavLink>
      <NavLink exact to="/quote">
        Quote
      </NavLink>
    </div>
  </header>
);

export default Header;
