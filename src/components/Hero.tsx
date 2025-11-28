import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ZoomParallax } from './ZoomParallax';

const Hero = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Text appears when scroll progress is between 70% and 100%
    const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

    const images = [
        {
            src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
            alt: 'Film production',
        },
        {
            src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=800&fit=crop',
            alt: 'Cinema camera',
        },
        {
            src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop',
            alt: 'Film set',
        },
        {
            src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1200&h=800&fit=crop',
            alt: 'Video production',
        },
        {
            src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop',
            alt: 'Recording studio',
        },
        {
            src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop',
            alt: 'Professional camera',
        },
        {
            src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop',
            alt: 'Film crew',
        },
    ];

    return (
        <div ref={containerRef} style={{ position: 'relative' }}>
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
                    }}
                >
                    <motion.h1
                        style={{
                            opacity: textOpacity,
                            y: textY,
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            lineHeight: 0.9,
                            marginBottom: '2rem',
                            letterSpacing: '-2px',
                            color: '#fff',
                        }}
                    >
                        CREATE <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>GREATNESS</span>
                        <br /> TOGETHER
                    </motion.h1>

                    <motion.p
                        style={{
                            opacity: textOpacity,
                            y: textY,
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            maxWidth: '800px',
                            margin: '0 auto 3rem',
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
