import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/tatucoin.png';

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
          <li><a href="#inicio">Home</a></li>
          <li><a href="#estudar">Estudar</a></li>
          <li><a href="#jogar">Sobre nós</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

