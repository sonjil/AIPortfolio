import React from 'react';
import { NavigationProvider } from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-gray-900">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </NavigationProvider>
  );
}

export default App;