"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Reviews.module.css';

const reviews = [
    {
        type: "The Hospitality",
        subtitle: "The Judith Experience",
        quote: "Ms. Judith is a legendary host. When we struggled to find the location, she personally walked down the street to guide us. Her smile and hospitality define the authentic Kerala homestay experience.",
        author: "Sunil Gk (Verified Family Stay)",
        rating: 5
    },
    {
        type: "The Atmosphere",
        subtitle: "Feels Like Home",
        quote: "Both Uncle and Aunty made us feel like family. From the delicious homemade food to the local travel tips, it’s a soulful experience. I already miss Coco the dog!",
        author: "Taher Sanwar (Verified Google Review)",
        rating: 5
    }
];

const Reviews = () => {
    return (
        <section className={styles.reviewsSection} id="reviews">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <div className={styles.headerContent}>
                        <div className={styles.textSide}>
                            <span className={styles.eyebrow}>Voices of Eden Garden</span>
                            <h2 className={styles.title}>Trusted by Global Travelers. <br />Loved by Nature Seekers.</h2>
                            <div className={styles.badges}>
                                <div className={styles.badge}>
                                    <strong>4.4/5</strong> <span>Google Reviews</span>
                                </div>
                                <div className={styles.badge}>
                                    <strong>4.5/5</strong> <span>Tripadvisor</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageSide}>
                            <img src="/happy-customer.jpg" alt="Happy Guest" className={styles.guestImage} />
                        </div>
                    </div>
                </motion.div>


                <div className={styles.grid}>
                    {reviews.map((rev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={styles.reviewCard}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.type}>{rev.type}</span>
                                <span className={styles.stars}>
                                    {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </span>
                            </div>
                            <h3 className={styles.subtitle}>{rev.subtitle}</h3>
                            <p className={styles.quote}>"{rev.quote}"</p>
                            <span className={styles.author}>— {rev.author}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
