import React from 'react';


const Header = ({ onToggleTheme, theme, onMobileMenuOpen, name }) => (
  <header className="header">
    <div className="header-content">
      <a href="#home" className="logo">{name}</a>
      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="theme-toggle" onClick={onToggleTheme}>
          <div className="toggle-icon">
            <span id="theme-icon">{theme === 'light' ? '☀️' : '🌙'}</span>
          </div>
        </div>
        <button className="mobile-menu-btn" onClick={onMobileMenuOpen}>
          ☰
        </button>
      </div>
    </div>
  </header>
);

export default Header;
