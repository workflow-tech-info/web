"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    {
        q: "Is Eden Garden a good choice for families visiting Fort Kochi?",
        a: "Absolutely. We offer a safe, peaceful, and spacious environment that is perfect for families. Our lush garden provides a quiet retreat from the city bustle, making us a top-rated family-friendly homestay in Kerala."
    },
    {
        q: "How far is the property from the main Fort Kochi tourist attractions?",
        a: "We are perfectly located just 1 km (a 5-minute walk/short drive) from the heart of Fort Kochi. You get the best of both worlds: a tranquil, quiet stay that is within easy reach of the Chinese Fishing Nets, St. Francis Church, and local cafes."
    },
    {
        q: "What makes your homemade breakfast the 'best in Kochi'?",
        a: "Our breakfast is 100% homemade by Ms. Judith using time-honored traditional Kerala recipes. We hand-select the freshest organic fruits and premium spices from the local markets every morning to ensure an authentic, high-quality culinary experience."
    },
    {
        q: "Do you offer high-speed internet for remote workers?",
        a: "Yes. We provide complimentary high-speed Wi-Fi throughout the property. Our quiet garden setting makes Eden Garden an ideal spot for digital nomads and travelers looking for a productive workation in India."
    },
    {
        q: "Can you assist with Kerala tour bookings and airport transfers?",
        a: "Yes, our hosts are local experts. We can help you arrange Cochin International Airport (COK) shuttles, Alleppey backwater houseboat cruises, and Munnar tea plantation tours to ensure your South India trip is seamless."
    }
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: any, isOpen: boolean, toggle: () => void }) => {
    return (
        <div className={styles.item}>
            <button className={styles.questionButton} onClick={toggle} aria-expanded={isOpen}>
                <h3 className={styles.question}>{faq.q}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ChevronDown className={styles.icon} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className={styles.answerWrapper}
                    >
                        <p className={styles.answer}>{faq.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={styles.faq} id="faq">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.eyebrow}>Your Questions Answered</span>
                    <h2 className={styles.title}>Common Questions.</h2>
                </motion.div>

                <div className={styles.list}>
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            faq={faq}
                            isOpen={openIndex === idx}
                            toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
