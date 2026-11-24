import React from 'react';
import '../styles/skills.css';
import { skills } from '../data/content';

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="container">
      <h2 className="section-title">Habilidades</h2>
      <p className="section-subtitle">Do levantamento de requisitos ao código e ao banco de dados.</p>
      <div className="skills-grid">
        {skills.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
