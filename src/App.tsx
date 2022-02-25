import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Sidenav from './components/Sidenav';
import './styles/globals.css'
import { ProjectModal } from './components/ProjectModal';

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [openProject, setOpenProject] = useState('')

  return (
    <div className="bg-gray-900 text-white">
      <Landing isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="space-y-10">
        <AboutMe />
        <Skills />
        <Projects setOpenProject={setOpenProject} />
        <Footer />
      </div>

      <ProjectModal openProject={openProject} setOpenProject={setOpenProject} />

      <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
  );
}

export default App;
