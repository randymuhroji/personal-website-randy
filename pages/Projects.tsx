
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <header className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Selected Work</h1>
        <p className="text-xl text-neutral-400 max-w-2xl">
          Here are some projects where I focused on solving real problems and delivering measurable impact.
        </p>
      </header>

      <div className="space-y-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
