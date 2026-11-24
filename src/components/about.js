import React from 'react';
import '../styles/about.css';
import profilePic from '../assets/profile.webp';
import { profile, highlights } from '../data/content';

const About = () => (
  <section id="about" className="hero">
    <div className="container hero-inner">
      <div className="hero-text">
        <span className="eyebrow">{profile.role}</span>
        <h1>Olá, eu sou <span className="accent">{profile.name}</span></h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="summary">{profile.summary}</p>
        <p className="location">📍 {profile.location}</p>
        <div className="hero-actions">
          <a href={profile.cv} download className="btn">Baixar currículo</a>
          <a href="#contact" className="btn btn-outline">Falar comigo</a>
        </div>
        <div className="hero-social">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>E-mail</a>
        </div>
      </div>
      <img src={profilePic} alt={`Foto de ${profile.name}`} className="profile-pic" width="240" height="240" />
    </div>
    <div className="container">
      <ul className="highlights">
        {highlights.map((h) => (
          <li key={h.label}>
            <strong>{h.value}</strong>
            <span>{h.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
