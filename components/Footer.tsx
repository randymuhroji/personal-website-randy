
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Randy. Built for impact.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
