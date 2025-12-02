import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGallery from './components/ServicesGallery';
import Values from './components/Values';
import Director from './components/Director';
import ValueProps from './components/ValueProps';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { StarsBackground } from './components/ui/stars-background';
import './App.css';

function App() {
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
        <Values />
        <Director />
        <ServicesGallery />
        <ValueProps />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
