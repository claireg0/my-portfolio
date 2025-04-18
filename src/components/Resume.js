import React from 'react';
import './Resume.css';

const Resume = () => (
  <section id="resume" className="section resume" data-aos="fade-up">
    <div className="container">
      <h2>Resume</h2>
      <ul>
        <li><strong>Software Engineering Intern</strong> at Shopify (2025)</li>
        <li><strong>iOS Developer & UI/UX Designer</strong> at Digitera Interactive (2023)</li>
        <li><strong>Hackathon Projects:</strong> Lemonaid, Goosebusters</li>
        <li><strong>Education:</strong> BSE Candidate, University of Waterloo (Class of 2025)</li>
      </ul>
      <a href="/files/Resume_Portfolio.pdf" download className="button">Download Full Resume</a>
    </div>
  </section>
);
export default Resume;
