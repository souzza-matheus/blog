import React from 'react';
import Header from './components/header';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Experience from './components/experience';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;