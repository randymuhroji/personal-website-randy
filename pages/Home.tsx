
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 mb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-[1.1]">
            Hi, I’m Randy 👋<br />
            <span className="text-neutral-500">Product Owner & AI Automation Builder</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
            I help companies build scalable digital products, AI-powered systems, and automation that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-neutral-800 text-white font-bold rounded-full hover:border-neutral-600 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Value Statement */}
      <section className="px-6 py-24 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-medium max-w-4xl mx-auto leading-tight text-gradient">
            "I bridge business needs and technical execution. From idea to delivery, I focus on impact — not just features."
          </p>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-12">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Product Strategy & Delivery</h3>
              <p className="text-neutral-400 leading-relaxed">
                Defining the roadmap and leading teams to execute high-impact digital products.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Automation, RAG & Intelligent Systems</h3>
              <p className="text-neutral-400 leading-relaxed">
                Leveraging large language models and retrieval-augmented generation to automate complex workflows.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">SaaS, Enterprise & Secure Digital Solutions</h3>
              <p className="text-neutral-400 leading-relaxed">
                Building scalable, secure platforms tailored for enterprise-grade operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="px-6 py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Real-world business solutions.
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed">
              "Built and led digital products used in real-world business operations, from document automation to AI-assisted workflows."
            </p>
          </div>
          <div className="aspect-video bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-500 overflow-hidden relative">
             <img src="https://picsum.photos/seed/tech/800/450" alt="Tech Highlight" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
             <span className="relative z-10 text-sm font-medium tracking-widest uppercase">System Architecture</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
