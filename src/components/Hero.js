import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="about" className="section-hero hero" data-aos="fade-up">
    <div className="hero-background">
      <div className="container hero-inner" data-aos="fade-right">
        <div className="hero-content">
          <h1>Claire G.</h1>
          <p>Software Engineering Student at the University of Waterloo</p>
          <p>Passionate about AI, Mobile App Development, and Web Technologies.</p>
        </div>
      </div>
      {/* Scroll button replacing profile image */}
      <div className="hero-scroll" data-aos="fade-up">
        <a href="#skills" className="scroll-button">Scroll for more <span className="arrow">↓</span></a>
      </div>
    </div>
  </section>
);
export default Hero;

