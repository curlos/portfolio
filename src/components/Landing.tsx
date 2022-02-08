import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Landing = () => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="space-y-3 text-center">
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

          <span className="flex-1 text-[30px]">
            <i className="fas fa-arrow-down"></i>
          </span>

        </div>
      </div>
    </div>
  )
};

export default Landing;
