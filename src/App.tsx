import React from 'react';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useColorModeValue } from './components/ui/color-mode';


const App: React.FC = () => {
  const navColor = useColorModeValue('fg', 'white');
  return (
    <Box minHeight="100vh" bg="bg">
      <Router>
        <nav style={{ zIndex: 1000, top: 0, position: 'sticky', padding: '1rem', backgroundColor: navColor, borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '1rem', fontWeight: 'bold' }}>About</Link>
          <Link to="/resume" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Resume</Link>
          <Link to="/projects" style={{fontWeight: 'bold' }}>Projects</Link>
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
