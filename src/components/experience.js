import React from 'react';
import '../styles/experience.css';
import { experiences, education } from '../data/content';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <h2 className="section-title">Experiência</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.company}>
            <div className="timeline-content">
              <span className="period">{exp.period}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.description.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h3 className="subsection-title">Formação</h3>
      <ul className="education">
        {education.map((e) => (
          <li key={e.title}>
            <strong>{e.title}</strong>
            <span>{e.place}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
