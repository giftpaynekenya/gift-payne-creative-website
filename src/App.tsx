import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGallery from './components/ServicesGallery';
import Values from './components/Values';
import Director from './components/Director';
import ValueProps from './components/ValueProps';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Values />
      <Director />

      <ServicesGallery />

      <ValueProps />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
