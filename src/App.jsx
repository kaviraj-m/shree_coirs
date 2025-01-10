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
const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <Container maxWidth="lg">
      <AboutUs />
        <Products />
        <Features />
        <Testimonials />
        <FAQ />
        <ContactUs/>
      </Container>
      <Footer />
    </>
  );
};

export default App;
