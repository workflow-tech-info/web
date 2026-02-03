"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about} id="heritage">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.imageBox}
                >
                    <img src="/hut stay.jpg" alt="Heritage Home" className={styles.image} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.content}
                >
                    <span className={styles.eyebrow}>The Heritage Story</span>
                    <h2 className={styles.title}>Step into a <br />living history.</h2>
                    <p className={styles.desc}>
                        Our 300-year-old ancestral home is a masterclass in traditional Kerala architecture,
                        offering a secluded getaway in the heart of the city.
                    </p>
                    <p className={styles.desc}>
                        Managed with love by Ms. Judith and family, Eden Garden is more than accommodation in
                        Fort Kochi; it is a <strong>regenerative travel experience</strong> that connects you
                        to the roots of the Malabar Coast.
                    </p>
                </motion.div>
            </div>

            <div className={`${styles.container} ${styles.reverse}`}>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <span className={styles.eyebrow}>The Urban Sanctuary</span>
                    <h2 className={styles.title}>Experience slow travel <br />at its finest.</h2>
                    <p className={styles.desc}>
                        Our property is a biodiverse urban forest, featuring a natural pond, a mini-waterfall,
                        and lush gardens that serve as a birdwatching paradise.
                    </p>
                    <p className={styles.desc}>
                        Whether you are a solo traveler, a <strong>digital nomad</strong>, or a family seeking
                        a nature-integrated stay, our garden provides the perfect wellness retreat in Kochi.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.imageBox}
                >
                    <img
                        src="/eden-garden-lush-sanctuary-garden.jpg"
                        alt="Lush biodiverse garden sanctuary at Eden Garden Heritage Farmstay in Fort Kochi, Kerala with tropical plants and peaceful atmosphere"
                        className={styles.image}
                    />
                </motion.div>
            </div>
        </section>
    );
};


export default About;
