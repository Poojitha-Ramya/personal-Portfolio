import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import CareerJourney from './components/CareerJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireMeModal from './components/HireMeModal';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Top Fixed Header Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenHireMe={() => setIsHireMeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenHireMe={() => setIsHireMeOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <Services />
        <AboutMe />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <CareerJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
