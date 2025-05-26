import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#about" className="logo">matheus Souza</a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir/Fechar Menu">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>Sobre Mim</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experiência</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;