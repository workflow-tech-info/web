import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "../article.module.css";

export const metadata: Metadata = {
    title: "Family Guide to Fort Kochi: Best Heritage Homestay | Eden Garden",
    description: "Discover why Eden Garden is the top-rated family-friendly heritage stay in Fort Kochi. Just 1km from main attractions with fresh local food and high-speed WiFi.",
    keywords: ["Best homestay in Fort Kochi for families", "heritage house", "quiet retreat", "authentic Kerala breakfast", "Fort Kochi beach"],
    alternates: { canonical: "https://edengardenkochi.com/blog/family-guide-fort-kochi" },
    openGraph: {
        title: "The Ultimate Family Guide to Fort Kochi: Why a Heritage Homestay is Your Best Choice",
        description: "Discover why Eden Garden is the top-rated family-friendly heritage stay in Fort Kochi. Just 1km from main attractions with fresh local food and high-speed WiFi.",
        images: [{ url: "/blog-family.jpg", width: 1200, height: 630, alt: "Heritage Homestay Fort Kochi Garden" }],
    },
};

const related = [
    { slug: "kerala-breakfast-guide", title: "The Complete Guide to Traditional Kerala Breakfast", image: "/blog-breakfast.jpg", category: "Food & Culture" },
    { slug: "fort-kochi-walking-guide", title: "The Perfect Self-Guided Walking Tour of Fort Kochi", image: "/blog-walking.jpg", category: "Sightseeing" },
    { slug: "wellness-retreat-kerala", title: "How to Plan the Ultimate Wellness Retreat in Kerala", image: "/blog-wellness.jpg", category: "Wellness" },
];

export default function FamilyGuidePage() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={styles.hero}>
                    <img src="/blog-family.jpg" alt="Heritage Homestay Fort Kochi Garden - family-friendly heritage bungalow with tropical garden" className={styles.heroImage} />
                    <div className={styles.heroOverlay}>
                        <span className={styles.category}>Family Travel</span>
                        <h1 className={styles.heroTitle}>The Ultimate Family Guide to Fort Kochi: Why a Heritage Homestay is Your Best Choice</h1>
                        <p className={styles.meta}>February 2026 · 5 min read</p>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <p className={styles.intro}>
                        Planning a family trip to Kerala often starts with a single question: where can we find a stay that is safe, authentic, and close to everything? While hotels offer standard rooms, a heritage stay in Fort Kochi provides something much more valuable—a "home away from home" experience.
                    </p>

                    <article className={styles.article}>
                        <p>For families exploring the historic coast of India, choosing the right accommodation can make or break the holiday. Here is why staying at a heritage house like Eden Garden is the smartest move for your next family adventure.</p>

                        <h2>Space to Breathe: The Magic of a Heritage House with a Garden</h2>
                        <p>Most city stays feel cramped, but a garden house offers the luxury of space. At Eden Garden, our garden serves as a quiet retreat where children can play safely in a natural environment while parents relax in the shade of tropical trees.</p>
                        <p>Maintaining a serene and allergy-friendly environment is our priority; hence, we are a pet-free sanctuary. This ensures that every family, including those with sensitive health needs, can enjoy a clean and peaceful stay in our heritage deluxe rooms.</p>

                        <h2>Location is Everything: Staying Within 1km of Fort Kochi's Icons</h2>
                        <p>When traveling with kids or seniors, distance matters. Eden Garden is a tranquil oasis located just 1 km from the heart of the action. This means you are a short, 10-minute walk or a quick drive away from:</p>
                        <ul>
                            <li>The iconic Chinese Fishing Nets</li>
                            <li>Historical St. Francis Church</li>
                            <li>The vibrant cafes of Princess Street</li>
                        </ul>
                        <p>Being near Fort Kochi beach allows your family to enjoy the sunset and local sightseeing without the stress of long commutes or heavy traffic.</p>

                        <h2>A Taste of Home: Authentic Kerala Breakfast for All Ages</h2>
                        <p>One of the highlights of a heritage homestay is the food. Forget mass-produced hotel buffets; here, you experience an <Link href="/blog/kerala-breakfast-guide">authentic Kerala breakfast</Link> prepared with care.</p>
                        <p>Every morning, we hand-select the freshest organic spices and seasonal fruits from the local market. Whether it is fluffy Appams or traditional vegetarian delicacies, our meals are crafted to be healthy, fresh, and kid-friendly, giving your family a true taste of Malayali hospitality.</p>

                        <h2>Stay Connected: A Peaceful Workation for Parents</h2>
                        <p>We know that many modern families are "Glowmads"—traveling while staying productive. Eden Garden is one of the few Kochi homestays with high-speed WiFi that actually works. Our quiet accommodation and garden sit-outs provide the perfect backdrop for a <Link href="/blog/digital-nomad-kochi">peaceful workation in Kerala</Link>, allowing you to clear your inbox while the kids enjoy the fresh air.</p>

                        <div className={styles.conclusion}>
                            <p>If you are looking for the best homestay in Fort Kochi for families, look for a place that balances history with modern comfort. From our AC rooms to our prime location and homemade meals, we invite you to experience the soul of Kerala.</p>
                            <Link href="/booking" className={styles.bookBtn}>Book Your Stay Now →</Link>
                        </div>
                    </article>
                </div>

                <section className={styles.related}>
                    <h2 className={styles.relatedTitle}>Continue Reading</h2>
                    <div className={styles.relatedGrid}>
                        {related.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.relatedCard}>
                                <img src={post.image} alt={post.title} className={styles.relatedImage} />
                                <div className={styles.relatedBody}>
                                    <span className={styles.relatedCategory}>{post.category}</span>
                                    <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Link href="/booking" className={styles.floatingCta}>Book Now</Link>
        </>
    );
}
