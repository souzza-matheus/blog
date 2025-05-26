import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const frontEndSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Bootstrap'];
  const backEndSkills = ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'RESTful APIs', 'RabbitMq', 'Spring Data JPA', 'Kafka'];
  const databases = ['MongoDB', 'PostgreSQL', 'MySQL'];
  const tools = ['Git', 'GitHub', 'Docker', 'Aws', 'Git Lab', 'Kubernets'];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Front-end</h3>
            <ul>
              {frontEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Back-end</h3>
            <ul>
              {backEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Bancos de Dados</h3>
            <ul>
              {databases.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Ferramentas & Outros</h3>
            <ul>
              {tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;