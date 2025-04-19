import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Lemonaid',
    description: 'AI-powered pantry app which can read, estimate and remind users of expiration dates with a picture.',
    github: 'https://github.com/1spyral/LemonAid',
    tech: ['Python', 'Flask', 'React', 'JavaScript', 'TailwindCSS', 'OpenAI API', 'RESTful API', 'GitHub'],
  },
  {
    title: 'Goosebusters',
    description: 'A turret featuring an electric water gun system and AI-powered live video processing to detect real-time motion of geese.',
    github: 'https://github.com/claireg0/goosebusters',
    tech: ['Python', 'OpenCV', 'Mediapipe', 'Raspberry Pi OS', 'Git', 'GitLab'],
  },
  {
    title: 'Workd',
    description: 'Job Tinder',
    github: 'https://github.com/andrewchu16/workd',
    tech: ['Python', 'Svelte', 'TypeScript', 'Flask', 'JSON', 'OpenAI API', 'BeautifulSoup'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="projects-header">Personal Projects</h2>
        <div className="project-list">
          {projects.map(p => (
            <div key={p.title} className="project-card" data-aos="fade-up">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="button">
                View on GitHub
              </a>
              <div className="project-tech">
                {p.tech.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
