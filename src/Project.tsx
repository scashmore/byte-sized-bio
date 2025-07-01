import React from 'react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  embedUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Text RPG Adventure',
    description: 'A browser-based text RPG with branching choices, character selection, and a battle system. This is a trimmed version of a larger personal project.',
    techStack: ['JavaScript', 'HTML/CSS', 'Modular Classes'],
    embedUrl: '/rpg/index.html',
  },
  {
    title: 'Resume Scraper (Example)',
    description: 'Python-based web scraper that collects job descriptions and extracts required skills. Results are cleaned and exported to JSON for analysis.',
    techStack: ['Python', 'Scrapy'],
    repoUrl: '',
    image: '',
  },
  {
    title: 'Space Iguana Lore API',
    description: 'A FastAPI backend serving structured lore, characters, weapons, and quotes from the absurd universe of my Space Iguana RPG. Strongly typed with Pydantic models and browsable via Swagger UI.',
    techStack: ['Python', 'FastAPI', 'Pydantic'],
    demoUrl: '',  // Update when deployed
    repoUrl: ''
  }
  ,
];

const Projects: React.FC = () => {
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Projects</h1>
      {projects.map((project, i) => (
        <div
          key={i}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '2rem',
            backgroundColor: '#fdfdfd',
          }}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.techStack.join(', ')}</p>
          
          {project.embedUrl && (
            <iframe
              src={project.embedUrl}
              title={project.title}
              style={{ width: '100%', height: '500px', border: '1px solid #ccc', marginTop: '1rem', borderRadius: '4px' }}
            />
          )}

          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              style={{ width: '100%', marginTop: '1rem', borderRadius: '4px' }}
            />
          )}

          <div style={{ marginTop: '1rem' }}>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;