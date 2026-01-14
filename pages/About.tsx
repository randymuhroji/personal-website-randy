
import React from 'react';
import { EXPERTISE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              I’m a Product Owner with hands-on experience building AI-powered products, automation systems, and scalable digital platforms.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed">
              My strength lies in translating complex business requirements into practical, well-executed technical solutions.
            </p>
          </section>

          <section className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-6">
              I’ve worked across product strategy, system architecture, and delivery — collaborating with engineers, stakeholders, and business teams to ship reliable products.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              I care deeply about clarity, execution, and long-term impact. I believe that technology should serve a clear business purpose and provide measurable value to its users.
            </p>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Expertise & Tools</h3>
            <ul className="space-y-4">
              {EXPERTISE.map((skill) => (
                <li key={skill} className="flex items-center text-neutral-200">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all">
             <img src="https://picsum.photos/seed/randy/500/500" alt="Randy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
