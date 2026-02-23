import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "../[slug]/article.module.css";

export const metadata: Metadata = {
    title: "Fort Kochi Self-Guided Walking Tour: A Local's Itinerary | Eden Garden",
    description: "Explore Fort Kochi on foot with our insider walking guide. Discover the Chinese Fishing Nets, St. Francis Church, Jew Town, and the best local food stops — all within walking distance.",
    keywords: ["Fort Kochi walking tour", "things to do Fort Kochi", "Chinese Fishing Nets", "Fort Kochi sightseeing", "Kochi heritage tour"],
    alternates: { canonical: "https://edengardenkochi.com/blog/fort-kochi-walking-guide" },
    openGraph: {
        title: "The Perfect Self-Guided Walking Tour of Fort Kochi: A Local's Itinerary",
        description: "Discover the best of Fort Kochi's heritage, street food, and waterfront on foot with our insider guide.",
        images: [{ url: "/blog-walking.jpg", width: 1200, height: 630, alt: "Fort Kochi Chinese Fishing Nets at golden hour" }],
    },
};

const related = [
    { slug: "family-guide-fort-kochi", title: "The Ultimate Family Guide to Fort Kochi", image: "/blog-family.jpg", category: "Family Travel" },
    { slug: "digital-nomad-kochi", title: "Why Fort Kochi is the Best Digital Nomad Destination", image: "/blog-nomad.jpg", category: "Digital Nomad" },
    { slug: "wellness-retreat-kerala", title: "How to Plan the Ultimate Wellness Retreat in Kerala", image: "/blog-wellness.jpg", category: "Wellness" },
];

export default function WalkingGuidePage() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={styles.hero}>
                    <img src="/blog-walking.jpg" alt="Fort Kochi walking tour - Chinese Fishing Nets and heritage buildings at golden hour" className={styles.heroImage} />
                    <div className={styles.heroOverlay}>
                        <span className={styles.category}>Sightseeing</span>
                        <h1 className={styles.heroTitle}>The Perfect Self-Guided Walking Tour of Fort Kochi: A Local's Itinerary</h1>
                        <p className={styles.meta}>February 2026 · 7 min read</p>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <p className={styles.intro}>
                        Fort Kochi is one of India's most walkable heritage districts. Within a compact 2km radius from Eden Garden, you can experience centuries of layered history — Portuguese churches, Dutch cemeteries, Jewish synagogues, and the iconic Chinese Fishing Nets. Here is the definitive local's route.
                    </p>

                    <article className={styles.article}>
                        <h2>Start Your Day: Breakfast First</h2>
                        <p>Every great exploration should begin with great fuel. We recommend starting with our <Link href="/blog/kerala-breakfast-guide">traditional Kerala breakfast</Link> at Eden Garden before heading out. The hearty Appam and Stew will keep you energised for a full morning of exploration.</p>

                        <h2>Stop 1: The Chinese Fishing Nets (Cheena Vala)</h2>
                        <p>Just a 10-minute walk from our property, the iconic Chinese Fishing Nets are Fort Kochi's most recognisable landmark. These magnificent cantilever fishing nets, believed to have been brought by Chinese explorer Zheng He in the 14th century, are best seen at:</p>
                        <ul>
                            <li>Sunrise (6:00–7:30 AM) — for the most dramatic photography</li>
                            <li>Sunset (5:30–7:00 PM) — for the golden-hour waterfront atmosphere</li>
                        </ul>
                        <p>You can pay a small fee to help operate the nets yourself — a truly memorable experience.</p>

                        <h2>Stop 2: St. Francis Church</h2>
                        <p>Walk south along the waterfront to St. Francis Church, built in 1503 and the oldest European church in India. Notable for:</p>
                        <ul>
                            <li>The original burial site of Vasco da Gama, the Portuguese explorer</li>
                            <li>Stunning colonial Portuguese architecture</li>
                            <li>A calm, cool interior — a perfect midday retreat from the heat</li>
                        </ul>

                        <h2>Stop 3: The Dutch Cemetery and Parade Ground</h2>
                        <p>Continue your walk to the 17th-century Dutch Cemetery, one of the oldest European cemeteries in India. The adjacent Parade Ground is a large open maidan that serves as the social heart of Fort Kochi, often hosting local cricket matches and evening cultural events.</p>

                        <h2>Stop 4: Princess Street and the Café Culture</h2>
                        <p>Princess Street is Fort Kochi's bohemian artery — lined with heritage-converted cafés, art galleries, boutique shops, and authentic Kerala eateries. Explore it slowly; there is always something beautiful to discover behind a hand-painted doorway.</p>
                        <p>Our recommendation: stop at one of the local cafés for a Kerala-style black coffee (no sugar, please) — it is a ritual here.</p>

                        <h2>Stop 5: Mattancherry and Jew Town</h2>
                        <p>Take a short auto-rickshaw ride (approximately ₹80) from Fort Kochi to Mattancherry. This area houses:</p>
                        <ul>
                            <li>The Paradesi Synagogue (1568) — one of the oldest active synagogues in the world</li>
                            <li>Jew Town's famous antique shops and silk emporiums</li>
                            <li>The Dutch Palace (Mattancherry Palace) with extraordinary Kerala murals</li>
                        </ul>

                        <h2>Practical Tips for Your Walking Tour</h2>
                        <ul>
                            <li>Best time to walk: Early morning (7–10am) or late afternoon (4–7pm)</li>
                            <li>Wear comfortable shoes — the cobblestone streets are uneven</li>
                            <li>Carry water and sunscreen</li>
                            <li>Hire an auto-rickshaw (tuk-tuk) for longer stretches between stops</li>
                            <li>Respect the dress code inside churches and the synagogue</li>
                        </ul>

                        <div className={styles.conclusion}>
                            <p>Fort Kochi's walkable charm is one of India's best-kept secrets. From Eden Garden, you are ideally positioned to experience all of it at your own pace. Stay with us, and the city is your oyster.</p>
                            <Link href="/booking" className={styles.bookBtn}>Book & Explore Fort Kochi →</Link>
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
