
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-indigo-400 transition-colors">
          Randy
        </Link>
        <div className="flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="hidden md:inline-flex px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
