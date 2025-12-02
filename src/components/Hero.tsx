import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ZoomParallax } from './ZoomParallax';

import './Hero.css';

import showreelVideo from '../assets/images/RONALD MWAROGOS SHOWREEL - ronald mwarogo (720p, h264).mp4';
import img2 from '../assets/images/IMG20220221101126.jpg';
import img3 from '../assets/images/IMG20231028150958.jpg';
import img4 from '../assets/images/IMG20231028144732.jpg';
import img5 from '../assets/images/IMG20210625153910.jpg';
import img6 from '../assets/images/20200612_150028.jpg';
import img7 from '../assets/images/IMG20231115114642.jpg';

const Hero = () => {
    const containerRef = useRef(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const texts = [
        "Trust & Reliability",
        "Obsessive Curiosity",
        "Making Magic Happen",
        "Authenticity",
        "Going Above & Beyond"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Text appears when scroll progress is between 70% and 100%
    const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

    const images = [
        {
            src: showreelVideo,
            alt: 'Showreel',
            isVideo: true,
        },
        {
            src: img2,
            alt: 'Cinema camera',
        },
        {
            src: img3,
            alt: 'Film set',
        },
        {
            src: img4,
            alt: 'Video production',
        },
        {
            src: img5,
            alt: 'Recording studio',
        },
        {
            src: img6,
            alt: 'Professional camera',
        },
        {
            src: img7,
            alt: 'Film crew',
        },
    ];

    return (
        <div ref={containerRef} id="hero-parallax" style={{ position: 'relative' }}>
            {/* Hero Content Overlay - Appears at the end */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '300vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    pointerEvents: 'none',
                }}
            >
                <div
                    style={{
                        position: 'sticky',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        textAlign: 'center',
                        padding: '0 2rem',
                        maxWidth: '1200px',
                        width: '100%',
                    }}
                >
                    <motion.div
                        style={{
                            opacity: textOpacity,
                            y: textY,
                            marginBottom: '2rem',
                            minHeight: '120px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentTextIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{
                                    fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                                    fontWeight: 700,
                                    margin: 0,
                                    textAlign: 'center',
                                    width: '100%',
                                }}
                            >
                                {currentTextIndex === 0 && (
                                    <>
                                        <span style={{ color: '#fff' }}>Trust & </span>
                                        <span style={{ color: 'var(--color-primary)' }}>Reliability</span>
                                    </>
                                )}
                                {currentTextIndex === 1 && (
                                    <>
                                        <span style={{
                                            color: 'transparent',
                                            WebkitTextStroke: '2px #fff'
                                        }}>Obsessive </span>
                                        <span style={{ color: 'var(--color-primary)' }}>Curiosity</span>
                                    </>
                                )}
                                {currentTextIndex === 2 && (
                                    <>
                                        <span style={{ color: 'var(--color-primary)' }}>Making </span>
                                        <span style={{
                                            color: 'transparent',
                                            WebkitTextStroke: '2px var(--color-primary)'
                                        }}>Magic </span>
                                        <span style={{ color: '#fff' }}>Happen</span>
                                    </>
                                )}
                                {currentTextIndex === 3 && (
                                    <span style={{
                                        color: 'transparent',
                                        WebkitTextStroke: '2px var(--color-primary)'
                                    }}>Authenticity</span>
                                )}
                                {currentTextIndex === 4 && (
                                    <>
                                        <span style={{ color: '#fff' }}>Going </span>
                                        <span style={{
                                            color: 'transparent',
                                            WebkitTextStroke: '2px #fff'
                                        }}>Above & </span>
                                        <span style={{ color: 'var(--color-primary)' }}>Beyond</span>
                                    </>
                                )}
                            </motion.h1>
                        </AnimatePresence>
                    </motion.div>

                    <motion.p
                        style={{
                            opacity: textOpacity,
                            y: textY,
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            color: 'rgba(255, 255, 255, 0.9)',
                        }}
                    >
                        We inspire <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>UNORTHODOX</span> and{' '}
                        <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>AUTHENTIC</span> ways of thinking.
                    </motion.p>
                </div>
            </div>

            {/* Zoom Parallax Effect */}
            <ZoomParallax images={images} />
        </div>
    );
};

export default Hero;
