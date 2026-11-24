import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© {new Date().getFullYear()} Matheus Souza · Feito com React</p>
    </div>
  </footer>
);

export default Footer;
