"use client";

import { motion } from 'framer-motion';
import styles from './Food.module.css';

const Food = () => {
    return (
        <section className={styles.food} id="amenities">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.header}
                >
                    <span className={styles.eyebrow}>The Culinary Experience</span>
                    <h2 className={styles.title}>Shelf Discovery: <br />Authentic Kerala Flavors.</h2>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.infoCard}
                    >
                        <p className={styles.desc}>
                            Voted the best homemade breakfast in Fort Kochi, our dining experience is rooted in
                            the <strong>"Shelf Discovery"</strong> trend—celebrating local, transparent sourcing.
                        </p>
                        <div className={styles.highlights}>
                            <div className={styles.highlight}>
                                <strong>Farm-to-Table</strong>
                                <p>Enjoy organic black pepper and fruits harvested directly from our garden.</p>
                            </div>
                            <div className={styles.highlight}>
                                <strong>Traditional Delicacies</strong>
                                <p>From fluffy Appams with Vegetable Stew to authentic Kerala Fish Molee.</p>
                            </div>
                            <div className={styles.highlight}>
                                <strong>Personal Touch</strong>
                                <p>Every meal is prepared by Ms. Judith, ensuring a homely experience.</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={styles.imageGrid}
                    >
                        <img src="/food2.jpg" alt="Kerala Food" className={styles.mainImage} />
                        <div className={styles.sideImages}>
                            <img src="/food3.jpg" alt="Breakfast" className={styles.sideImage1} />
                            <img src="/food4.jpg" alt="Atmosphere" className={styles.sideImage2} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Food;
