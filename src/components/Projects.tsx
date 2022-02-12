import React from 'react';
import { getProjects } from '../utils/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = getProjects()

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-medium mb-5">Projects</h1>
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project) => <ProjectCard project={project} />)}
      </div>
    </div>
  )
};

export default Projects;
