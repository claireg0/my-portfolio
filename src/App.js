import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>  
      <Navbar />
      <div className="social-icons">
        <a href="mailto:claire.jl.guo@gmail.com" aria-label="Email">
        <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/claire-jl-guo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>

        </a>
        <a href="https://github.com/claireg0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i class="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
      <Hero />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
