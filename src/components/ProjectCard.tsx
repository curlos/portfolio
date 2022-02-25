import React from 'react';
import { getTechTools } from '../utils/data';

interface Props {
  project: any,
  setOpenProject: any
}

const ProjectCard = ({ project, setOpenProject }: Props) => {
  const techTools: any = getTechTools()
  console.log(techTools)
  console.log(project)

  return (
    <div className="bg-gray-800 rounded-2xl text-left flex flex-col" onClick={setOpenProject(project.name)}>
      <img src={project.screenshots[0]} alt="Netflix 2.0" className="rounded-t-2xl"></img>
      <div className="flex-1 flex flex-col justify-between p-7 space-y-2">
        <div className="space-y-2">
          <div className="text-xl font-bold">{project.name}</div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-gray-400">Tech Stack: </div>
            <div className="space-x-2">
              {project.techStack.map((techTool: string) => {
                console.log(techTool.toLowerCase())
                console.log(techTools[techTool.toLowerCase()])

                if (techTools[techTool.toLowerCase()] && techTools[techTool.toLowerCase()].icon) {
                  return (
                    <i className={`${techTools[techTool.toLowerCase()].icon} text-white text-2xl`}></i>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>

          <div>
            {project.summary}
          </div>
        </div>

        <div className="space-y-3 lg:space-y-0 lg:flex gap-3">
          <a href={project.liveUrl}
            target="_blank" rel="noreferrer"
            className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white p-2 px-4 rounded-full space-x-2 hover:bg-blue-600 w-full">
              <i className="fas fa-eye"></i>
              <span className="">View Demo</span>
            </button>
          </a>

          <a href={project.sourceCodeUrl}
            target="_blank" rel="noreferrer"
            className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white p-2 px-4 rounded-full space-x-2 hover:bg-blue-600 w-full">
              <i className="fas fa-code"></i>
              <span className="">View Code</span>
            </button>
          </a>
        </div>


      </div>
    </div>
  );
};

export default ProjectCard;
