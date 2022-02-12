import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-between px-10 py-4 w-full bg-gray-900 fixed z-10">
      <div>
        <h1>Carlos Martinez</h1>
      </div>

      <div className="space-x-5">
        <span>Home</span>
        <span>About Me</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Education & Experience</span>
      </div>
    </div>
  )
};

export default Navbar;
