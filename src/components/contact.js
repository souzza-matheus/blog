import React, { useState } from 'react';
import '../styles/contact.css';
import { profile } from '../data/content';

// Sem back-end: o formulário abre o cliente de e-mail do visitante já preenchido.
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Vamos conversar?</h2>
        <p className="section-subtitle">
          Estou aberto a oportunidades em implantação, projetos, suporte e produto — e a projetos freelance.
        </p>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
            <label htmlFor="email">Seu e-mail</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn">Enviar mensagem</button>
          </form>
          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <span>E-mail</span>
              <strong>{profile.email}</strong>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span>LinkedIn</span>
              <strong>/in/matheus-souza</strong>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span>GitHub</span>
              <strong>souzza-matheus</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
