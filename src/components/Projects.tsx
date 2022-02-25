import React from 'react';
import { getProjects } from '../utils/data';
import ProjectCard from './ProjectCard';

interface Props {
  setOpenProject: any
}

const Projects = ({ setOpenProject }: Props) => {
  const projects = getProjects()

  return (
    <div className="text-center p-10 md:p-5">
      <h1 className="text-4xl font-medium mb-5">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project) => <ProjectCard project={project} setOpenProject={setOpenProject} />)}
      </div>
    </div>
  )
};

export default Projects;
