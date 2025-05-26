import React from 'react';
import '../styles/experience.css';

const experiences = [
  {
    id: 1,
    title: 'Analista de sistemas computadorizados',
    company: 'Brafel Informatica',
    period: 'Dezembro 2022 - Junho 2025',
    description: [
      'Condução do **levantamento e análise de requisitos** junto a stakeholders e equipes de produto, traduzindo necessidades de negócio em especificações técnicas claras.',
      'Desenvolvimento de **funcionalidades em aplicação desktop java**, garantindo alta performance e segurança das soluções backend.',
      'Gestão e otimização de **bancos de dados relacionais (mysql) incluindo design de schema, otimização de consultas e manutenção de integridade dos dados.',
      'Atuação como **suporte técnico de nível **, investigando e resolvendo incidentes complexos em produção, garantindo a continuidade dos serviços e a satisfação do cliente.',
      'Colaboração ativa na definição de arquitetura de sistemas e na adoção de melhores práticas de desenvolvimento',
      'Exploração e integração contínua de novas tecnologias e ferramentas para aprimorar o stack tecnológico e a eficiência do desenvolvimento.',
    ],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Minha Experiência</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <ul>
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;