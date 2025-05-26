import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar um serviço de envio de e-mail como Formspree, Netlify Forms, EmailJS, etc.
    // Por simplicidade, vamos apenas logar os dados no console.
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! (Verifique o console para os dados)');
    setFormData({ name: '', email: '', message: '' }); // Limpar o formulário
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Enviar Mensagem</button>
        </form>
        <div className="contact-info">
          <p>Ou me encontre em:</p>
          <p>Email: <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer">linkedin.com/in/seuperfil</a></p>
          <p>GitHub: <a href="https://github.com/seuperfil" target="_blank" rel="noopener noreferrer">github.com/seuperfil</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;