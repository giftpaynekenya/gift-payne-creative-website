import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
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

const ServiceSection = ({ service, index, setActiveIndex }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div ref={ref} className="luxury-service-item">
            {/* Mobile Image - Visible only on mobile */}
            <div className="luxury-mobile-image">
                <img src={service.image} alt={service.title} />
            </div>

            <div className="luxury-service-content">
                <span className="luxury-service-subtitle" style={{ color: service.color }}>
                    0{index + 1} — {service.subtitle}
                </span>
                <h3 className="luxury-service-title">{service.title}</h3>
                <p className="luxury-service-description">{service.description}</p>
            </div>
        </div>
    );
};

const ServicesGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="services-luxury">
            <div className="services-luxury-header">
                <span className="services-luxury-label">OUR EXPERTISE</span>
                <h2 className="services-luxury-heading">WHAT WE DO</h2>
            </div>

            <div className="services-luxury-container">
                <div className="services-luxury-images">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="luxury-image-wrapper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeIndex === index ? 1 : 0 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                            <img src={service.image} alt={service.title} />
                            <div className="luxury-image-overlay" />
                        </motion.div>
                    ))}
                </div>

                <div className="services-luxury-list">
                    {services.map((service, index) => (
                        <ServiceSection
                            key={index}
                            service={service}
                            index={index}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGallery;
