import React, { useEffect, useRef } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import DesignedBy from './components/DesignedBy';
import ContactUsDirectly from './components/ContactUsDirectly';
import BIRDS from 'vanta/dist/vanta.birds.min'; 
import * as THREE from 'three'; 

const App = () => {
  const vantaRef = useRef(null); 
  const vantaEffect = useRef(null); 

  useEffect(() => {
    
    vantaEffect.current = BIRDS({
      el: vantaRef.current,
      THREE, 
      backgroundColor: 0xffffff, 
      color1: 0x000000, 
      color2: 0x000000, 
      birdSize: 0.5, 
      speedLimit: 1, 
      separation: 50, 
      alignment: 50, 
      cohesion: 50, 
    });

    return () => {
      
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <div ref={vantaRef} className="app-container" style={{ minHeight: '100vh' }}>
        <Header />
        <Hero />
        <Container maxWidth="lg">
          <AboutUs />
          <Products />
          <Features />
          <Testimonials />
          <FAQ />
          <ContactUs />
          <ContactUsDirectly />
          <DesignedBy />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default App;
