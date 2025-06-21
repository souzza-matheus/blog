import React from 'react';
import '../styles/projects.css';
import blogImg from '../assets/blog.png';
import ihcImg from '../assets/ihcGame.png'
import emailImg from '../assets/email.jpg'

const projectsData = [
   {
    id: 1,
    title: 'Email sender',
    description: 'Este projeto é uma API de envio de e-mails construída em Spring Boot, utilizando arquitetura limpa, autenticação com JWT, controle de rate limit com Redis e integração com serviços externos de SMTP.',
    image: emailImg,
    technologies: ['Java', 'Spring', 'Redis'],
    githubLink: 'https://github.com/souzza-matheus/email-sender',
    liveLink: 'https://souzza-matheus.github.io/blog/',
  },
  {
    id:2,
    title:'IHC Game',
    description:'Este é um jogo de tabuleiro web interativo onde você assume o papel de um Analista de IHC (Interação Humano-Computador), viajando por diferentes empresas para resolver problemas de usabilidade na forma de quizzes de múltipla escolha.',
    image:ihcImg,
    technologies: ['React.js', 'Markdown', 'CSS'],
    githubLink: 'https://github.com/souzza-matheus/ihc-quiz',
    liveLink: 'https://souzza-matheus.github.io/ihc-quiz/',

  }

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-techs">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">Ver Projeto</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;