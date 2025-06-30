import React from 'react';
import About from './About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div>
    <h1>Welcome to My Personal Website</h1>
    <p>This is the landing page.</p>
  </div>
);

const Projects: React.FC = () => (
  <div>
    <h1>Projects</h1>
    <p>Here you can list my projects.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
