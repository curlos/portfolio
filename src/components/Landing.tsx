import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="flex-1 flex justify-center items-end">
        <div className="space-y-3 text-center h-3/4 flex flex-col justify-between">
          <div className="space-y-3">
            <h1 className="text-6xl font-bold">Carlos Martinez</h1>
            <h2>I am a full-stack developer.</h2>

            <div className="space-x-3">
              <i className="fab fa-github-square text-[30px]"></i>
              <i className="fab fa-linkedin text-[30px]"></i>
            </div>

            <div className="mb-5">
              <button className="bg-blue-500 px-4 py-2 rounded-full">
                Hire me
              </button>
            </div>
          </div>

          <div className="text-[30px] p-5">
            <div className="animate-bounce inline-block">
              <i className="fas fa-arrow-down "></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Landing;