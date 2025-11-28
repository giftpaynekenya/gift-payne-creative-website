import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ServicesGallery.css';

const services = [
    {
        title: "DOCUMENTARY FILMMAKING",
        subtitle: "REAL STORIES",
        description: "We delve deep into the heart of the matter, capturing raw emotions and untold stories. Our documentaries are not just films; they are experiences that provoke thought and inspire change.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=800&fit=crop",
        color: "var(--color-primary)"
    },
    {
        title: "LIVE SHOW PRODUCTION",
        subtitle: "BROADCAST QUALITY",
        description: "From multi-camera setups to live streaming, we bring the energy of live events to screens everywhere. We handle the technical complexities so you can focus on the show.",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
        color: "var(--color-secondary)"
    },
    {
        title: "COMMERCIAL ADS",
        subtitle: "BRAND IMPACT",
        description: "We create high-octane commercials that cut through the noise. Bold visuals, dynamic editing, and compelling narratives that drive your brand message home.",
        image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1200&h=800&fit=crop",
        color: "var(--color-accent)"
    },
    {
        title: "MUSIC VIDEOS",
        subtitle: "VISUAL RHYTHM",
        description: "Translating sound into sight. We collaborate with artists to create visual masterpieces that amplify their music and define their aesthetic.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop",
        color: "var(--color-neon-green)"
    },
    {
        title: "PHOTOGRAPHY",
        subtitle: "CAPTURING MOMENTS",
        description: "From high-fashion shoots to corporate events, our photography captures the essence of the moment with clarity and artistic flair.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
        color: "var(--color-primary)"
    },
    {
        title: "BRAND STORYTELLING",
        subtitle: "NARRATIVE POWER",
        description: "We help brands find their voice and tell their story in a way that resonates. Authentic, compelling, and unforgettable.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop",
        color: "var(--color-secondary)"
    }
];

const ServicesGallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="services-parallax-container">
            <div className="services-parallax-sticky">
                {services.map((service, index) => {
                    const start = index / services.length;
                    const end = (index + 1) / services.length;

                    const scale = useTransform(
                        scrollYProgress,
                        [start, end],
                        [1, 0.8]
                    );

                    const opacity = useTransform(
                        scrollYProgress,
                        [start, end - 0.1, end],
                        [1, 1, 0]
                    );

                    return (
                        <motion.div
                            key={index}
                            className="service-parallax-card"
                            style={{
                                scale,
                                opacity,
                                zIndex: services.length - index,
                            }}
                        >
                            <div className="service-parallax-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-parallax-overlay">
                                <div className="service-parallax-content">
                                    <span className="service-parallax-subtitle" style={{ color: service.color }}>
                                        {service.subtitle}
                                    </span>
                                    <h3 className="service-parallax-title">{service.title}</h3>
                                    <p className="service-parallax-description">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServicesGallery;
