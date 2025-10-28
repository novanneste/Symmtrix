import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const linkClass = (path) => {
    return `px-4 py-2 rounded-lg transition-colors ${
      isActive(path)
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }`;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Symmtrix</h1>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className={linkClass('/')}>
              Dashboard
            </Link>
            <Link to="/projects" className={linkClass('/projects')}>
              My Projects
            </Link>
            <Link to="/scanner" className={linkClass('/scanner')}>
              Symmetry Scanner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
