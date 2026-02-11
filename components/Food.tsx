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
                    <h2 className={styles.title}>Authentic Kerala Flavors: <br />A Taste of Home in Fort Kochi.</h2>
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
                            Voted the best homemade breakfast in Fort Kochi, our dining experience honors the true spirit of
                            Kerala’s culinary heritage through locally sourced ingredients and time-honored traditional recipes.
                        </p>
                        <div className={styles.highlights}>
                            <div className={styles.highlight}>
                                <strong>Fresh & Local <span style={{ fontWeight: 400, opacity: 0.8 }}>| Premium Sourcing</span></strong>
                                <p>We hand-select the finest organic spices and seasonal fruits from trusted local markets, ensuring every meal captures the vibrant, natural essence of Kerala.</p>
                            </div>
                            <div className={styles.highlight}>
                                <strong>Traditional Delicacies <span style={{ fontWeight: 400, opacity: 0.8 }}>| Heritage Recipes</span></strong>
                                <p>Savor the classics of South India, from soft, fluffy Appams paired with creamy Vegetable Stew to our signature, slow-cooked Kerala Fish Molee.</p>
                            </div>
                            <div className={styles.highlight}>
                                <strong>Personal Touch <span style={{ fontWeight: 400, opacity: 0.8 }}>| Homely Hospitality</span></strong>
                                <p>Every dish is personally crafted by Ms. Judith, bringing the warmth of a true Kerala home to your table for an unforgettable and authentic dining experience.</p>
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
