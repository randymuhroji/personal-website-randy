
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    name: "Dokumo AI",
    description: "An AI-powered document management and summarization platform designed to reduce manual processing and improve productivity.",
    problem: "Manual document handling and slow review process",
    solution: "AI-assisted summarization, digital signature, and automation",
    techStack: ["AI", "RAG", "Automation", "Cloud Infrastructure"],
    impact: "Faster processing, reduced human error, scalable workflow"
  }
];

export const EXPERTISE = [
  "Product Ownership",
  "AI Automation",
  "RAG Systems",
  "SaaS Platforms",
  "Cloud Infrastructure",
  "Security-Aware Systems"
];

export const NAV_LINKS = [
  { name: 'Work', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
