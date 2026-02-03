"use client";

import { motion } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
    {
        q: "Is Eden Garden the best heritage homestay in Fort Kochi for families?",
        a: "Absolutely. Our child-friendly environment, spacious garden, and friendly resident pets (dogs, ducks, and rabbits) make us a top choice for family-friendly stays in Kerala."
    },
    {
        q: "How far is the property from the main Kochi tourist attractions?",
        a: "We are a tranquil oasis just a 10-minute walk (2km) from the heart of Fort Cochin. You get the peace of a farmstay while being close to the best sightseeing in Kochi."
    },
    {
        q: "Do you offer high-speed internet for digital nomads?",
        a: "Yes. We offer complimentary high-speed Wi-Fi across the property, perfect for Glowmads and remote workers looking for a quiet workation spot in India."
    },
    {
        q: "Is the property pet-friendly?",
        a: "We are one of the few pet-friendly hotels in Kochi. We have our own friendly pets, including our dog Coco, and we welcome your furry friends to our green sanctuary."
    },
    {
        q: "Can you help with Kerala travel planning and backwater tours?",
        a: "Yes, our hosts have local expert knowledge and can help you book Alleppey houseboat cruises, Munnar tea plantation tours, and Kochi backwater day trips."
    },
    {
        q: "Is there safe parking and airport connectivity?",
        a: "We provide airport shuttle services to and from Cochin International Airport (COK) and have safe, local parking for those on South India road trips."
    },
    {
        q: "What makes your breakfast the 'best in Kochi'?",
        a: "Our breakfast is 100% homemade by Ms. Judith using traditional Kerala recipes and organic ingredients from our own heritage farm."
    }
];

const FAQ = () => {
    return (
        <section className={styles.faq} id="faq">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.eyebrow}>SEO Answer Engine</span>
                    <h2 className={styles.title}>Common Questions.</h2>
                </motion.div>


                <div className={styles.list}>
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={styles.item}
                        >
                            <h3 className={styles.question}>{faq.q}</h3>
                            <p className={styles.answer}>{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
