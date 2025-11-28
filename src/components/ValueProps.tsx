import React from 'react';
import { Lightbulb, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './ValueProps.css';

const valueProps = [
    {
        icon: <Target size={50} />,
        title: 'STRATEGIC STORYTELLING',
        description: "We don't just film; we formulate strategies that convert. Every frame is calculated to drive business results and audience engagement."
    },
    {
        icon: <Lightbulb size={50} />,
        title: 'UNORTHODOX THINKING',
        description: "Stand out in a sea of sameness. We bring bold, disruptive ideas that challenge the status quo and capture attention."
    },
    {
        icon: <Zap size={50} />,
        title: 'MULTI-PLATFORM NATIVE',
        description: "Content built to perform. Whether it's TV, Digital, or Social, we optimize for the medium to maximize impact."
    }
];

const ValueProps = () => {
    return (
        <section className="value-props">
            <div className="container">
                <motion.div
                    className="value-props-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>THE CREATIVE <span className="highlight">EDGE</span></h2>
                    <p>Why brands choose Gift Payne Creative to tell their stories.</p>
                </motion.div>

                <div className="value-props-grid">
                    {valueProps.map((prop, index) => (
                        <motion.div
                            key={index}
                            className="value-prop-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="prop-icon">{prop.icon}</div>
                            <h3>{prop.title}</h3>
                            <p>{prop.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
