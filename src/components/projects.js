import React from 'react';
import '../styles/projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Projeto E-commerce React',
    description: 'Um e-commerce completo construído com React, Redux para gerenciamento de estado e Firebase para autenticação e banco de dados.',
    image: 'https://via.placeholder.com/400x250?text=Projeto+Ecommerce', // Substitua por sua imagem real
    technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
    githubLink: 'https://github.com/seuperfil/projeto-ecommerce',
    liveLink: 'https://seunome.com/ecommerce-live', // Opcional
  },
  {
    id: 2,
    title: 'Blog Pessoal com Next.js',
    description: 'Um blog responsivo desenvolvido com Next.js para SEO aprimorado e Markdown para o conteúdo das postagens.',
    image: 'https://via.placeholder.com/400x250?text=Projeto+Blog', // Substitua por sua imagem real
    technologies: ['Next.js', 'Markdown', 'CSS Modules'],
    githubLink: 'https://github.com/seuperfil/blog-nextjs',
    liveLink: 'https://seunome.com/blog-live', // Opcional
  },
  {
    id: 3,
    title: 'API RESTful com Node.js',
    description: 'Uma API RESTful para um sistema de gerenciamento de tarefas, utilizando Node.js, Express e MongoDB.',
    image: 'https://via.placeholder.com/400x250?text=Projeto+API', // Substitua por sua imagem real
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    githubLink: 'https://github.com/seuperfil/api-tasks',
    liveLink: null,
  },
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