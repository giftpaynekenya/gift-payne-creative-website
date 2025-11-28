import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
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
      <Director />

      <Section
        title="DOCUMENTARY FILMMAKING"
        subtitle="REAL STORIES"
        description="We delve deep into the heart of the matter, capturing raw emotions and untold stories. Our documentaries are not just films; they are experiences that provoke thought and inspire change."
        image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=800&fit=crop"
        color="var(--color-primary)"
      />

      <Section
        title="LIVE SHOW PRODUCTION"
        subtitle="BROADCAST QUALITY"
        description="From multi-camera setups to live streaming, we bring the energy of live events to screens everywhere. We handle the technical complexities so you can focus on the show."
        image="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop"
        reversed={true}
        color="var(--color-secondary)"
      />

      <Section
        title="COMMERCIAL ADS"
        subtitle="BRAND IMPACT"
        description="We create high-octane commercials that cut through the noise. Bold visuals, dynamic editing, and compelling narratives that drive your brand message home."
        image="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1200&h=800&fit=crop"
        color="var(--color-accent)"
      />

      <Section
        title="MUSIC VIDEOS"
        subtitle="VISUAL RHYTHM"
        description="Translating sound into sight. We collaborate with artists to create visual masterpieces that amplify their music and define their aesthetic."
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop"
        reversed={true}
        color="var(--color-neon-green)"
      />

      <Section
        title="PHOTOGRAPHY"
        subtitle="CAPTURING MOMENTS"
        description="From high-fashion shoots to corporate events, our photography captures the essence of the moment with clarity and artistic flair."
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop"
        color="var(--color-primary)"
      />

      <Section
        title="BRAND STORYTELLING"
        subtitle="NARRATIVE POWER"
        description="We help brands find their voice and tell their story in a way that resonates. Authentic, compelling, and unforgettable."
        image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop"
        reversed={true}
        color="var(--color-secondary)"
      />

      <ValueProps />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
