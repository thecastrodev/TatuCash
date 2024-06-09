import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/tatucoin.png';
import { Link } from 'react-router-dom';
import { Home } from '../../pages/Home';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="#inicio">
              <Link to={'/'}>Home</Link>
            </a>
          </li>
          <li>
            <a href="#estudar">
              <Link to={'/formacao'}>Estudar</Link>
            </a>
          </li>
          <li>
            <a href="#jogar">
              <Link to={'/sobre'}>Sobre nós</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
