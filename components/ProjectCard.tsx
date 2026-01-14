
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all">
      <div className="p-8 md:p-10">
        <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
        <p className="text-neutral-400 mb-8 leading-relaxed max-w-2xl">
          {project.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Problem</h4>
            <p className="text-sm text-neutral-300">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Solution</h4>
            <p className="text-sm text-neutral-300">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-2 py-1 bg-neutral-800 rounded text-[10px] font-medium text-neutral-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Impact</h4>
            <p className="text-sm text-indigo-400 font-medium">{project.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
