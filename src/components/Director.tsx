import React from 'react';
import { motion } from 'framer-motion';
import './Director.css';

const Director = () => {
    return (
        <section className="director-section">
            <div className="container director-container">
                <motion.div
                    className="director-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="director-backdrop"></div>
                    <img
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                        alt="Hellen Maina - Line Producer"
                        className="director-image"
                    />
                </motion.div>

                <motion.div
                    className="director-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="director-subtitle">MEET OUR DIRECTOR</span>
                    <h2 className="director-name">HELLEN MAINA</h2>
                    <h3 className="director-role">LINE PRODUCER</h3>

                    <div className="director-bio">
                        <p>
                            Behind every successful production is a well-organized and efficient workflow, and that's where Hellen comes in.
                            As the mastermind behind our logistics, she manages schedules, budgets, and on-set operations to ensure seamless execution.
                        </p>
                        <p>
                            From coordinating talent and crew to securing locations, Hellen's sharp attention to detail and expert problem-solving
                            keep every project on track, allowing the creative team to focus purely on bringing the vision to life.
                        </p>
                    </div>

                    <div className="director-signature">Hellen Maina</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Director;
