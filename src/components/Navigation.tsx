import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Brain } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/30">
        <div className="flex space-x-6">
          <Link
            to="/"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              location.pathname === '/'
                ? 'bg-white/30 text-black font-semibold'
                : 'text-black/70 hover:text-black hover:bg-white/20'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Daily Inspiration</span>
          </Link>
          <Link
            to="/feynman"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              location.pathname === '/feynman'
                ? 'bg-white/30 text-black font-semibold'
                : 'text-black/70 hover:text-black hover:bg-white/20'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Feynman Quotes</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;