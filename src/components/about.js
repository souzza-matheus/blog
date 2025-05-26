import React from 'react';
import '../styles/about.css';
import profilePic from '../assets/profile.webp';

const about = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <img src={profilePic} alt="Sua Foto de Perfil" className="profile-pic" />
        <h1>Olá, eu sou Matheus Souza</h1>
        <p className="lead">
        Sou um Desenvolvedor Backend com sólida experiência em Spring e Java, construindo APIs robustas e sistemas escaláveis. Tenho paixão por resolver problemas complexos e estou sempre explorando novas tecnologias para encontrar a melhor solução.
        Minha expertise principal é em backend, mas estou sempre aberto a desafios e oportunidades em diversas tecnologias e stacks, buscando aprendizado contínuo e crescimento profissional.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/matheus-souza-a07200200/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href="https://github.com/souzza-matheus" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
          <a href="/curriculo-matheus-souza.pdf" download className="btn">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default about;