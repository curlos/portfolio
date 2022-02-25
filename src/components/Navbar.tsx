import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  isOpen: any,
  setIsOpen: any
}

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="border-b border-gray-300 flex justify-between px-10 py-4 w-full bg-gray-900 fixed z-10">
      <div>
        <h1>Carlos Martinez</h1>
      </div>

      <div className="space-x-5 hidden md:flex">
        <div className="flex items-center gap-2 cursor-pointer">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <i className="fas fa-user"></i>
          <span>About Me</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <i className="fas fa-tools"></i>
          <span>Skills</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <i className="fas fa-boxes"></i>
          <span>Projects</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <i className="fas fa-pen-alt"></i>
          <span>Contact Me</span>
        </div>
      </div>

      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars text-xl"></i>
      </div>

    </div>
  )
};

export default Navbar;
