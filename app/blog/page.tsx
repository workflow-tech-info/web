import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "./blog.module.css";

export const metadata: Metadata = {
    title: "Eden Garden Blog | Travel Tips, Heritage & Kochi Guides",
    description: "Explore Eden Garden's blog for insider travel guides to Fort Kochi, Kerala breakfast recipes, digital nomad tips, and wellness retreat inspiration.",
    alternates: { canonical: "https://edengardenkochi.com/blog" },
};

const posts = [
    {
        slug: "family-guide-fort-kochi",
        title: "The Ultimate Family Guide to Fort Kochi: Why a Heritage Homestay is Your Best Choice",
        excerpt: "Planning a family trip to Kerala? Discover why a heritage stay at Eden Garden offers space, safety, and soul — just 1km from all the iconic attractions.",
        image: "/blog-family.jpg",
        alt: "Heritage Homestay Fort Kochi Garden - family-friendly heritage bungalow surrounded by tropical plants",
        category: "Family Travel",
        date: "February 2026",
    },
    {
        slug: "kerala-breakfast-guide",
        title: "The Complete Guide to Traditional Kerala Breakfast: Appams, Stews & More",
        excerpt: "Voted the best homemade breakfast in Fort Kochi — discover the flavors, recipes, and philosophy behind our authentic Kerala morning meals.",
        image: "/blog-breakfast.jpg",
        alt: "Traditional Kerala Appam and vegetable stew on banana leaf - authentic Fort Kochi breakfast",
        category: "Food & Culture",
        date: "February 2026",
    },
    {
        slug: "digital-nomad-kochi",
        title: "Why Fort Kochi is the Best Digital Nomad Destination in India",
        excerpt: "High-speed WiFi, a peaceful heritage garden, and a vibrant cultural scene — Fort Kochi is the perfect base for your South India workation.",
        image: "/blog-nomad.jpg",
        alt: "Digital nomad workspace at Eden Garden - laptop and coffee overlooking tropical garden",
        category: "Digital Nomad",
        date: "February 2026",
    },
    {
        slug: "fort-kochi-walking-guide",
        title: "The Perfect Self-Guided Walking Tour of Fort Kochi: A Local's Itinerary",
        excerpt: "From the ancient Chinese Fishing Nets to colonial-era churches and authentic street food — here is how to explore Fort Kochi on foot.",
        image: "/blog-walking.jpg",
        alt: "Fort Kochi walking tour - Chinese Fishing Nets and heritage buildings at golden hour",
        category: "Sightseeing",
        date: "February 2026",
    },
    {
        slug: "wellness-retreat-kerala",
        title: "How to Plan the Ultimate Wellness Retreat in Kerala",
        excerpt: "Kerala is the birthplace of Ayurveda and slow travel. Explore how to design your personal wellness journey from a heritage homestay in Fort Kochi.",
        image: "/blog-wellness.jpg",
        alt: "Heritage wellness room at Eden Garden - serene boutique room with palm tree views",
        category: "Wellness",
        date: "February 2026",
    },
];

export default function BlogIndex() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.hero}>
                    <p className={styles.eyebrow}>Eden Garden Journal</p>
                    <h1 className={styles.heroTitle}>Stories from Fort Kochi</h1>
                    <p className={styles.heroDesc}>Travel guides, cultural stories, and insider tips for experiencing the real Kerala.</p>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.alt} className={styles.cardImage} />
                                <span className={styles.category}>{post.category}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.date}>{post.date}</p>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>Read Article →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
}
