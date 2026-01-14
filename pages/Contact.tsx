
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-12">Let’s talk.</h1>
        <p className="text-2xl text-neutral-400 mb-12 leading-relaxed">
          If you’re building a product, exploring AI automation, or need a clear product direction — I’d love to connect.
        </p>

        <div className="space-y-8 mb-16">
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</span>
            <a href="mailto:hello@randy.com" className="text-2xl font-medium hover:text-indigo-400 transition-colors">
              hello@randy.com
            </a>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">LinkedIn</span>
            <a href="#" className="text-2xl font-medium hover:text-indigo-400 transition-colors">
              linkedin.com/in/randy-product
            </a>
          </div>
        </div>

        <button className="inline-flex items-center justify-center px-10 py-5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-all transform hover:scale-105 active:scale-95">
          Start a Conversation
        </button>
      </div>
    </div>
  );
};

export default Contact;
