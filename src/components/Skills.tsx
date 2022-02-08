import React from 'react';
import { getTechTools } from '../utils/data';

const Skills = () => {
  const techTools = getTechTools()

  console.log(techTools)

  return (
    <div className="text-center">
      <h1 className="text-4xl font-medium">Skills</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sequi laboriosam quis alias nihil in pariatur labore veritatis? Nulla nam repellendus numquam non velit, asperiores magnam doloremque vero voluptatum alias!</p>

      <div className="flex flex-wrap items-center space-x-3">
        {Object.values(techTools).map((techTool) => {
          return (
            <div className="flex flex-col justfiy-center items-center bg-white text-black p-1 rounded-lg">
              <img src={techTool.icon} alt="" className="h-9 w-9" />
              <div>{techTool.name}</div>
            </div>
          )
        })}
      </div>

    </div>
  )
};

export default Skills;
