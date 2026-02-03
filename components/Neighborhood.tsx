"use client";

import { motion } from 'framer-motion';
import styles from './Neighborhood.module.css';

const Neighborhood = () => {
    return (
        <section className={styles.neighborhood} id="neighborhood">
            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.eyebrow}>The Neighborhood</span>
                        <h2 className={styles.title}>Fort Kochi & Beyond.</h2>
                        <p className={styles.desc}>
                            Located in a quiet cul-de-sac in Amaravathy, we offer the perfect balance of peace and proximity.
                        </p>
                    </motion.div>

                    <div className={styles.locations}>
                        <motion.div
                            className={styles.locItem}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <strong>Biennale 2026</strong>
                            <p>Just 2km from main venues. Preferred stay for art attendees.</p>
                        </motion.div>

                        <motion.div
                            className={styles.locItem}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <strong>Walking Tours</strong>
                            <p>Easy access to Chinese Fishing Nets, St. Francis Church, and Jew Town.</p>
                        </motion.div>

                        <motion.div
                            className={styles.locItem}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <strong>Sustainable Transit</strong>
                            <p>Located near Thamaraparambu area, ideal for cycling and walking tours.</p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className={styles.mapContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Conceptual Map Image */}
                    <img src="/water-ride.jpg" alt="Neighborhood Activities" className={styles.mapPlaceholder} />

                </motion.div>
            </div>
        </section>
    );
};

export default Neighborhood;
