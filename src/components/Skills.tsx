import React from 'react';
import { getTechTools } from '../utils/data';

const Skills = () => {
  const techTools = getTechTools()
  const frontEndTools = Object.values(techTools).filter(((techTool => techTool.categories.includes('front-end'))))
  const backEndTools = Object.values(techTools).filter(((techTool => techTool.categories.includes('back-end'))))
  const miscTools = Object.values(techTools).filter(((techTool => techTool.categories.includes('misc'))))

  console.log(frontEndTools)

  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-medium mb-5">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {[frontEndTools, backEndTools, miscTools].map((tools, i) => (
          <div className="my-2">
            <div className="text-2xl mb-2">{['Front-end', 'Back-end', 'Miscalleneous'][i]}</div>
            <div className="flex justify-center gap-4 flex-wrap bg-gray-800 p-6 rounded-xl h-full">
              {Object.values(tools).map((techTool) => {
                return (
                  <div className="flex flex-col justify-center items-center p-1 rounded-lg">
                    <i className={`${techTool.icon} text-white text-4xl`}></i>
                    <div>{techTool.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>



    </div>
  )
};

export default Skills;
