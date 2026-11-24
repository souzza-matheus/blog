import React from 'react';
import '../styles/projects.css';
import { projects } from '../data/content';

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h2 className="section-title">Projetos</h2>
      <p className="section-subtitle">Produtos próprios, trabalhos acadêmicos e estudos.</p>
      <div className="projects-grid">
        {projects.map((p) => (
          <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.title}>
            {p.image ? (
              <img src={p.image} alt={`Captura de tela do projeto ${p.title}`} className={`project-image ${p.imageFit === 'contain' ? 'contain' : ''}`} loading="lazy" />
            ) : (
              <div className="project-image placeholder" aria-hidden="true">{p.title.charAt(0)}</div>
            )}
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-techs">
                {p.technologies.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-links">
                {p.liveLink && (
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-small">Ver projeto</a>
                )}
                {p.githubLink && (
                  <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">Código</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
