"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Food from '@/components/Food';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';

import Neighborhood from '@/components/Neighborhood';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Food />
        <Rooms />
        <Amenities />

        <Neighborhood />
        <Reviews />
        <FAQ />



        {/* Contact Section */}
        <Contact />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>© 2026 Eden Garden Farmstay. Sustainable Heritage Sanctuary.</p>

          <div className={styles.footerLinks}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sustainability Report</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
