import React from 'react';
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

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className="app-container">
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
