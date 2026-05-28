import React from 'react';


const MobileMenu = ({ onClose, open = false }) => (
  <div className={`mobile-menu ${open ? 'active' : ''}`} id="mobileMenu">
    <button className="mobile-close" onClick={onClose}>×</button>
    <nav>
      <ul className="nav-links">
        <li><a href="#home" onClick={onClose}>Home</a></li>
        <li><a href="#about" onClick={onClose}>About</a></li>
        <li><a href="#skills" onClick={onClose}>Skills</a></li>
        <li><a href="#experience" onClick={onClose}>Experience</a></li>
        <li><a href="#projects" onClick={onClose}>Projects</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
      </ul>
    </nav>
  </div>
);

export default MobileMenu;
