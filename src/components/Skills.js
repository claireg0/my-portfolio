import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'TypeScript', 'Swift', 'HTML/CSS'],
  },
  {
    category: 'Frameworks and Libraries',
    skills: ['ReactJS', 'TailwindCSS', 'Flask', 'jQuery', 'Wow.js', 'Vite.js'],
  },
  {
    category: 'Miscellaneous',
    skills: ['Git', 'GitHub', 'GitLab', 'JSON', 'Figma', "SageMath", 'Jupyter Notebooks', 'VS Code'],
  },
];

const Skills = () => (
  <section id="skills" className="section skills" data-aos="fade-up">
    <div className="container">
      <h2 className="skills-header">Skills</h2>
      {skillsData.map(({ category, skills }) => (
        <div key={category} className="skills-group">
          <h3 className="group-title">{category}</h3>
          <div className="tags">
            {skills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

