import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundSection from './components/BackgroundSection';

function App() {
  return (
    <div>
      <Navbar />
      <p>Content</p>
      <HeroSection />
      <AboutSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
