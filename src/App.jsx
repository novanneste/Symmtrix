import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import MyProjects from './pages/MyProjects';
import SymmetryScanner from './pages/SymmetryScanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/scanner" element={<SymmetryScanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
