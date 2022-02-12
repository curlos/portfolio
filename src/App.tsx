import React from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/globals.css'

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Landing />
      <div className="space-y-10">
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>

    </div>
  );
}

export default App;
