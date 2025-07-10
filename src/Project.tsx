import React from 'react';
import {ProjectCard, Project} from './components/projectComponents';
import { Container, SectionHeading } from './components/aboutComponents';
import { useColorModeValue } from './components/ui/color-mode';

const projects: Project[] = [
  {
    title: 'Text RPG Adventure',
    description: 'A browser-based text RPG with branching choices...',
    techStack: ['JavaScript', 'HTML/CSS', 'Modular Classes'],
    embedUrl: '/rpg/index.html',
  },
  {
    title: "Gluten-Free Recipe Scraper",
    description: "Python-based scraper that collects gluten-free recipes...",
    techStack: ["Python", "Scrapy", "MySQL"],
    repoUrl: "https://github.com/scashmore/gluten_free_scraper",
    image: "/data/projects/scrapy.mp4",
  },
  {
    title: 'Space Iguana Lore API',
    description: 'A FastAPI backend serving structured lore...',
    techStack: ['Python', 'FastAPI', 'Pydantic'],
    demoUrl: '',
    repoUrl: ''
  }
];

const Projects: React.FC = () => {
  const bg = useColorModeValue('lavender.400', 'lavender.900');
  const accent = useColorModeValue('gold.500', 'gold.300');

  return (
    <Container bg={bg}>
      <SectionHeading accent={accent}>Susan Livingston's Projects</SectionHeading>
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </Container>
  );
};

export default Projects;
