import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Matheus Souza. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ e React.</p>
      </div>
    </footer>
  );
};

export default Footer;