import React from 'react';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box minHeight="100vh" bg="bg">
      <Router>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>About</Link>
          <Link to="/resume" style={{ marginRight: '1rem' }}>Resume</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </main>
      </Router>
    </Box>
  );
};

export default App;
