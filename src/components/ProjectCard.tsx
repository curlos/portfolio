import React from 'react';
import { getTechTools } from '../utils/data';

interface Props {
  project: any
}

const ProjectCard = ({ project }: Props) => {
  const techTools: any = getTechTools()
  console.log(techTools)
  console.log(project)

  return (
    <div className="bg-gray-800 rounded-lg text-left">
      <img src={project.screenshots[0]} alt="Netflix 2.0" className="rounded-t-lg"></img>
      <div className="p-7">
        <div className="text-xl font-bold">{project.name}</div>
        <div className="flex items-center gap-2">
          <div className="text-gray-400">Tech Stack: </div>
          <div className="space-x-2">
            {project.techStack.map((techTool: string) => {
              console.log(techTool.toLowerCase())
              console.log(techTools[techTool.toLowerCase()])

              if (techTools[techTool.toLowerCase()] && techTools[techTool.toLowerCase()].icon) {
                return (
                  <i className={`${techTools[techTool.toLowerCase()].icon} text-white text-2xl`}></i>
                )
              }
            })}
          </div>
        </div>

        <a href={project.sourceCodeUrl}
          target="_blank" rel="noreferrer"
          className="flex items-center space-x-2">
          <span className="hover:underline text-gray-400">View Code</span>
          <i className="fas fa-link text-xl"></i>
        </a>

        <a href={project.liveUrl}
          target="_blank" rel="noreferrer"
          className="flex items-center space-x-2">
          <span className="hover:underline text-gray-400">Live Preview</span>
          <i className="fas fa-link text-xl"></i>
        </a>


      </div>
    </div>
  );
};

export default ProjectCard;
