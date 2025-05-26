import React from 'react';
import '../styles/projects.css';
import blogImg from '../assets/blog.png';

const projectsData = [
  {
    id: 1,
    title: 'Blog Pessoal com Next.js',
    description: 'Um blog responsivo desenvolvido com React.js e Markdown para o conteúdo das postagens.',
    image: blogImg,
     technologies: ['Next.js', 'React.js', 'Markdown', 'CSS'],
    githubLink: 'https://github.com/souzza-matheus/blog',
    liveLink: 'https://seunome.com/blog-live',
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