import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "../[slug]/article.module.css";

export const metadata: Metadata = {
    title: "Traditional Kerala Breakfast Guide: Appams, Stews & More | Eden Garden",
    description: "Explore the rich traditions of Kerala breakfast cuisine. From fluffy Appams to Kerala Fish Molee — Eden Garden's Ms. Judith guides you through the authentic flavours of Fort Kochi.",
    keywords: ["Kerala breakfast", "traditional Appam", "Fort Kochi food", "authentic Kerala cuisine", "best breakfast Kochi"],
    alternates: { canonical: "https://edengardenkochi.com/blog/kerala-breakfast-guide" },
    openGraph: {
        title: "The Complete Guide to Traditional Kerala Breakfast: Appams, Stews & More",
        description: "Voted best homemade breakfast in Fort Kochi — discover the authentic Kerala morning meal traditions at Eden Garden.",
        images: [{ url: "/blog-breakfast.jpg", width: 1200, height: 630, alt: "Traditional Kerala Appam and stew on banana leaf" }],
    },
};

const related = [
    { slug: "family-guide-fort-kochi", title: "The Ultimate Family Guide to Fort Kochi", image: "/blog-family.jpg", category: "Family Travel" },
    { slug: "fort-kochi-walking-guide", title: "The Perfect Self-Guided Walking Tour of Fort Kochi", image: "/blog-walking.jpg", category: "Sightseeing" },
    { slug: "wellness-retreat-kerala", title: "How to Plan the Ultimate Wellness Retreat in Kerala", image: "/blog-wellness.jpg", category: "Wellness" },
];

export default function BreakfastGuidePage() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={styles.hero}>
                    <img src="/blog-breakfast.jpg" alt="Traditional Kerala Appam and vegetable stew on banana leaf - authentic Fort Kochi breakfast" className={styles.heroImage} />
                    <div className={styles.heroOverlay}>
                        <span className={styles.category}>Food & Culture</span>
                        <h1 className={styles.heroTitle}>The Complete Guide to Traditional Kerala Breakfast: Appams, Stews & More</h1>
                        <p className={styles.meta}>February 2026 · 6 min read</p>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <p className={styles.intro}>
                        Voted the best homemade breakfast in Fort Kochi, Eden Garden's morning table is more than a meal — it is a ritual rooted in centuries of Kerala culinary heritage. Here is a deep dive into the authentic flavours and philosophy behind every dish.
                    </p>

                    <article className={styles.article}>
                        <h2>Why Kerala Breakfast is Unlike Anything Else in India</h2>
                        <p>Kerala cuisine occupies a unique culinary space in India. Blessed by geography — bounded by the Arabian Sea and the Western Ghats — the state has centuries of trade history with Arab, Portuguese, and Dutch merchants that shaped its spice palette and cooking methods.</p>
                        <p>The Kerala breakfast tradition is built on fresh, locally sourced, minimally processed ingredients. Every dish tells a story of the land it came from.</p>

                        <h2>The Star Dishes: What You Will Find on Our Table</h2>
                        <h3>Appam with Vegetable Stew</h3>
                        <p>Appam is a soft, lacy rice pancake with a spongy centre and crispy edges, fermented overnight for a gentle sourdough tang. It is traditionally paired with a creamy, mildly spiced Vegetable Stew made from coconut milk, green chillies, and fresh garden vegetables. This combination is the soul of a Kerala morning.</p>

                        <h3>Puttu and Kadala Curry</h3>
                        <p>Puttu is a cylindrical steamed rice cake layered with freshly grated coconut. Its dense texture is perfectly complemented by Kadala Curry — a robust black chickpea curry cooked with roasted coconut and aromatic spices. It is a deeply satisfying, protein-rich start to the day.</p>

                        <h3>Kerala Fish Molee</h3>
                        <p>Our signature slow-cooked Kerala Fish Molee uses the freshest catch from the Fort Kochi market. Simmered in golden turmeric-tinted coconut milk with green chillies and ginger, it is a dish of extraordinary delicacy and depth.</p>

                        <h2>The Philosophy: Fresh, Local, and Lovingly Made</h2>
                        <p>Every morning, Ms. Judith heads to the local market to hand-select the finest organic spices and seasonal fruits. Our commitment is simple:</p>
                        <ul>
                            <li>No frozen or pre-packaged ingredients</li>
                            <li>Coconut freshly grated every morning</li>
                            <li>Spices sourced directly from local Kochi farmers</li>
                            <li>Seasonal fruits served straight from the garden</li>
                        </ul>
                        <p>This is the same philosophy that connects <Link href="/blog/family-guide-fort-kochi">family guests</Link> and solo travellers alike to the real spirit of Kerala.</p>

                        <h2>Dietary Accommodations</h2>
                        <p>Our breakfast is naturally suited to a range of dietary needs. Most dishes are vegetarian, and we are happy to accommodate:</p>
                        <ul>
                            <li>Vegan guests (coconut milk replaces dairy in all recipes)</li>
                            <li>Gluten-free requirements (rice-based dishes are our staple)</li>
                            <li>Children's palates (milder spice levels available)</li>
                        </ul>

                        <div className={styles.conclusion}>
                            <p>A meal at Eden Garden is not just breakfast — it is an edible piece of Kerala heritage. Come and taste the tradition that has won us the title of Fort Kochi's most beloved homemade morning spread.</p>
                            <Link href="/booking" className={styles.bookBtn}>Book Your Stay & Breakfast →</Link>
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
