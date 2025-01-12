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
import NET from 'vanta/dist/vanta.net.min';  
import * as THREE from 'three';

const App = () => {
  const vantaRef = useRef(null); 
  const vantaEffect = useRef(null); 

  useEffect(() => {
    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE, 
      backgroundColor: 0xffffff, 
      color: 0x000000, 
      points: 10, 
      maxDistance: 40, 
      spacing: 20,
      showDots: false,
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <div
        ref={vantaRef}
        className="app-container"
        style={{
          minHeight: '100vh',
          position: 'relative', 
        }}
      >
        
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.5)', 
            backdropFilter: 'blur(3px)', 
            zIndex: 1, 
          }}
        />
        
       
        <div style={{ position: 'relative', zIndex: 2 }}>
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
      </div>
    </>
  );
};

export default App;
