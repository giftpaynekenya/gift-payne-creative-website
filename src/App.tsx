import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { StarsBackground } from './components/ui/stars-background';
import './App.css';

// Lazy load components below the fold
const ServicesGallery = lazy(() => import('./components/ServicesGallery'));
const Values = lazy(() => import('./components/Values'));
const Director = lazy(() => import('./components/Director'));
const ValueProps = lazy(() => import('./components/ValueProps'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="app-loader">
        <div className="app-loader-content">
          <span className="app-loader-text">Making Magic Happen...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundColor: '#000', pointerEvents: 'none' }}>
        <StarsBackground
          starDensity={0.0003}
          allStarsTwinkle={true}
          twinkleProbability={0.7}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1}
        />
      </div>
      <div className="app-container">
        <Navbar />
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Values />
          <Director />
          <ServicesGallery />
          <ValueProps />
          <Newsletter />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
