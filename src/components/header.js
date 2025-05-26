import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#about" className="logo">Matheus</a>
        <ul className="nav-links">
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#experience">Experiência</a></li> {/* Adicione se for usar */}
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;