"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <article className={styles.hero} id="hero">
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        A 300-Year Heritage
                        <br />
                        <span className={styles.highlight}>Sanctuary Awaits</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        Discover Eden Garden – where sustainable luxury meets
                        <br className={styles.desktopBreak} />
                        authentic Kerala soul in the heart of Fort Kochi.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <button
                            className={styles.primaryBtn}
                            onClick={() => {
                                document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Check Availability
                        </button>
                        <button
                            className={styles.secondaryBtn}
                            onClick={() => {
                                document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Know More
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <img
                        src="/eden-garden-heritage-farmstay-exterior.jpg"
                        alt="Eden Garden Heritage Farmstay - 300 Year Old Sanctuary in Fort Kochi, Kerala featuring traditional architecture and lush gardens"
                        className={styles.heroImage}
                    />
                </motion.div>
            </div>
        </article>
    );
};

export default Hero;
