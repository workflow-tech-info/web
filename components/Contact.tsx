"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        const message = `Hello! I'm reaching out from the Eden Garden website.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}

*Message:*
${formData.message}

Looking forward to hearing from you!`;

        const whatsappNumber = "918086477654";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Get in Touch</h2>
                    <p className={styles.subtitle}>
                        Have questions? Reach out to us for direct bookings and inquiries.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.formContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="contact-name" className={styles.visuallyHidden}>Your Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                aria-label="Your name"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="contact-email" className={styles.visuallyHidden}>Your Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-label="Your email address"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="contact-message" className={styles.visuallyHidden}>Your Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Message"
                                className={styles.textarea}
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                aria-label="Your message"
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
