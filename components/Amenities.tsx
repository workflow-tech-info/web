"use client";

import { motion } from 'framer-motion';
import { Home, Wifi, Wind, Car, Heart, ShieldCheck } from 'lucide-react';
import styles from './Amenities.module.css';

const amenities = [
    {
        category: "Stay Type",
        title: "Heritage Farmstay",
        desc: "Eco-friendly Homestay & Workation Hub.",
        icon: <Home size={24} />
    },
    {
        category: "Digital",
        title: "High-speed Wi-Fi",
        desc: "Seamless connection for remote work.",
        icon: <Wifi size={24} />
    },
    {
        category: "Climate",
        title: "Eco-efficient AC",
        desc: "Well-ventilated heritage rooms.",
        icon: <Wind size={24} />
    },
    {
        category: "Transport",
        title: "Airport Shuttle",
        desc: "COK shuttle & Kochi Water Metro access.",
        icon: <Car size={24} />
    },
    {
        category: "Lifestyle",
        title: "Pet-friendly",
        desc: "Child-safe play area & lush terrace.",
        icon: <Heart size={24} />
    },
    {
        category: "Safety",
        title: "Eco-Conscious",
        desc: "Regenerative travel with local roots.",
        icon: <ShieldCheck size={24} />
    }
];

const Amenities = () => {
    return (
        <section className={styles.amenitiesSection} id="amenities">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.eyebrow}>Modern Comforts</span>
                    <h2 className={styles.title}>Everything you need. <br />Nothing you don't.</h2>
                </motion.div>

                <div className={styles.grid}>
                    {amenities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <span className={styles.category}>{item.category}</span>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
