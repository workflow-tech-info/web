"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">Eden Garden</Link>
                </div>
                <div className={styles.links}>
                    <Link href="#hero">Home</Link>
                    <Link href="#heritage">Heritage</Link>
                    <Link href="#amenities">Amenities</Link>
                    <Link href="#faq">FAQ</Link>
                    <Link href="#contact">Contact Us</Link>
                    <button onClick={() => router.push('/booking')} className={styles.contactBtn}>
                        Book Now
                    </button>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
