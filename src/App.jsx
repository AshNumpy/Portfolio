import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WorksPage from './pages/WorksPage';
import GalleryPage from './pages/GalleryPage';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Works />
            <Gallery />
            <Contact />
          </div>
        } />

        {/* Works Page */}
        <Route path="/works" element={<WorksPage />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
