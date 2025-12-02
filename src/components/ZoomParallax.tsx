import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
    isVideo?: boolean;
}

interface ZoomParallaxProps {
    images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    // Ultra smooth spring physics
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 40,
        restDelta: 0.001,
        mass: 0.5
    });

    // Original scale ranges for full screen coverage
    const scale4 = useTransform(smoothProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(smoothProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(smoothProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(smoothProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(smoothProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} style={{ position: 'relative', height: '300vh' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
                willChange: 'transform'
            }}>
                {images.map(({ src, alt, isVideo }, index) => {
                    const scale = scales[index % scales.length];

                    const getPositionStyles = (idx: number) => {
                        const positions: { [key: number]: React.CSSProperties } = {
                            1: { top: '-30vh', left: '5vw', height: '30vh', width: '35vw' },
                            2: { top: '-10vh', left: '-25vw', height: '45vh', width: '20vw' },
                            3: { top: '0', left: '27.5vw', height: '25vh', width: '25vw' },
                            4: { top: '27.5vh', left: '5vw', height: '25vh', width: '20vw' },
                            5: { top: '27.5vh', left: '-22.5vw', height: '25vh', width: '30vw' },
                            6: { top: '22.5vh', left: '25vw', height: '15vh', width: '15vw' },
                        };
                        return positions[idx] || {};
                    };

                    return (
                        <motion.div
                            key={index}
                            style={{
                                scale,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                willChange: 'transform',
                                transform: 'translate3d(0, 0, 0)', // Force GPU acceleration
                            }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    height: '25vh',
                                    width: '25vw',
                                    willChange: 'transform',
                                    backfaceVisibility: 'hidden', // Prevent flickering
                                    ...getPositionStyles(index),
                                }}
                            >
                                {isVideo ? (
                                    <video
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            willChange: 'transform',
                                            transform: 'translate3d(0, 0, 0)',
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={src || '/placeholder.svg'}
                                        alt={alt || `Parallax image ${index + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            willChange: 'transform',
                                            transform: 'translate3d(0, 0, 0)',
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
