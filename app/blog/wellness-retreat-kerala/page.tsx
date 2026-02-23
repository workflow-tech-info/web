import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "../article.module.css";

export const metadata: Metadata = {
    title: "Wellness Retreat in Kerala: A Complete Planning Guide | Eden Garden",
    description: "Kerala is the birthplace of Ayurveda and slow travel. Plan your perfect wellness retreat from a heritage homestay in Fort Kochi with our complete guide to rejuvenation in South India.",
    keywords: ["wellness retreat Kerala", "Ayurveda Kochi", "slow travel India", "heritage wellness stay", "yoga retreat Fort Kochi"],
    alternates: { canonical: "https://edengardenkochi.com/blog/wellness-retreat-kerala" },
    openGraph: {
        title: "How to Plan the Ultimate Wellness Retreat in Kerala",
        description: "Kerala is the birthplace of Ayurveda. Discover how Eden Garden provides the perfect heritage wellness sanctuary in Fort Kochi.",
        images: [{ url: "/blog-wellness.jpg", width: 1200, height: 630, alt: "Heritage wellness room at Eden Garden with palm tree views" }],
    },
};

const related = [
    { slug: "family-guide-fort-kochi", title: "The Ultimate Family Guide to Fort Kochi", image: "/blog-family.jpg", category: "Family Travel" },
    { slug: "kerala-breakfast-guide", title: "The Complete Guide to Traditional Kerala Breakfast", image: "/blog-breakfast.jpg", category: "Food & Culture" },
    { slug: "fort-kochi-walking-guide", title: "The Perfect Self-Guided Walking Tour of Fort Kochi", image: "/blog-walking.jpg", category: "Sightseeing" },
];

export default function WellnessPage() {
    return (
        <>
            <Navbar />
            <main className={styles.page}>
                <div className={styles.hero}>
                    <img src="/blog-wellness.jpg" alt="Heritage wellness room at Eden Garden - serene boutique room with palm tree views and wooden shutters" className={styles.heroImage} />
                    <div className={styles.heroOverlay}>
                        <span className={styles.category}>Wellness</span>
                        <h1 className={styles.heroTitle}>How to Plan the Ultimate Wellness Retreat in Kerala</h1>
                        <p className={styles.meta}>February 2026 · 6 min read</p>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <p className={styles.intro}>
                        Kerala is the birthplace of Ayurveda — the ancient Indian science of life and longevity. For those seeking genuine rest, restoration, and reconnection with nature, there is no better destination in the world. Here is how to plan it perfectly.
                    </p>

                    <article className={styles.article}>
                        <h2>Why Kerala is the World's Wellness Capital</h2>
                        <p>Kerala's wellness tradition is not a modern trend — it is a 3,000-year-old living science. The state's unique combination of tropical climate, abundant medicinal herbs, coastal access, and deeply ingrained Ayurvedic practice makes it the most authentic wellness destination in India and arguably the world.</p>
                        <p>Every element of life here — the food, the pace, the architecture, the natural environment — is conducive to healing and renewal.</p>

                        <h2>Choosing the Right Base for Your Wellness Stay</h2>
                        <p>Your accommodation sets the tone for your entire wellness experience. We recommend:</p>
                        <ul>
                            <li>Prioritising natural settings with garden access over city-centre hotels</li>
                            <li>Choosing heritage properties for architectural calm and lower ambient noise</li>
                            <li>Staying somewhere that serves authentic, fresh, locally sourced food</li>
                            <li>Ensuring proximity to nature — water, green spaces, open sky</li>
                        </ul>
                        <p>Eden Garden's 300-year-old heritage home, surrounded by a lush tropical garden, naturally meets all of these criteria. Our <Link href="/blog/family-guide-fort-kochi">peaceful, garden-centred environment</Link> has been welcoming wellness-focused travellers for generations.</p>

                        <h2>Your Wellness Itinerary: A Day at Eden Garden</h2>
                        <h3>Morning: Dawn to 10am</h3>
                        <p>Begin with 30 minutes of quiet meditation or gentle yoga in the garden as the morning light filters through the mango and coconut trees. Follow this with our signature <Link href="/blog/kerala-breakfast-guide">traditional Kerala breakfast</Link> — always fresh, always prepared with love.</p>

                        <h3>Mid-Morning: 10am to 1pm</h3>
                        <p>Explore Fort Kochi's heritage streets on a slow, meditative walk — or arrange an Ayurvedic consultation with one of the city's reputable Ayurveda practitioners (we can recommend and book). Fort Kochi has a growing number of excellent, authentic Ayurveda clinics offering treatments from a single-session head massage (Shirodhara) to full panchakarma programmes.</p>

                        <h3>Afternoon: 1pm to 5pm</h3>
                        <p>Return to the garden for a quiet rest. The open-air sit-outs and the gentle sounds of the property provide the perfect conditions for an afternoon nap or reading session. Our rooms are designed for restorative sleep — cool, quiet, and clean.</p>

                        <h3>Evening: 5pm to sunset</h3>
                        <p>Walk to the Fort Kochi waterfront to watch the sun set over the Arabian Sea. This is one of the great, simple pleasures of staying here — and it never gets old.</p>

                        <h2>Wellness Experiences Near Eden Garden</h2>
                        <ul>
                            <li><strong>Ayurvedic Treatments:</strong> Multiple certified centres within 2km offering Shirodhara, Abhyanga, and full panchakarma</li>
                            <li><strong>Alleppey Backwater Cruise:</strong> A 2-hour drive for a transformative houseboat experience on Kerala's legendary backwaters</li>
                            <li><strong>Munnar Tea Retreat:</strong> A 4-hour drive into the cool, misty tea plantations of the Western Ghats — ideal for a day trip or overnight extension</li>
                            <li><strong>Kochi Yoga Studios:</strong> Several high-quality yoga retreats and studios operating in Fort Kochi</li>
                        </ul>

                        <h2>The Wellness Diet: Eating for Restoration in Kerala</h2>
                        <p>Ayurvedic nutrition emphasises seasonal, local, and freshly prepared foods. Our breakfast and dining options naturally align with these principles. We also work with guests to arrange special dietary meals on request — including specific Ayurvedic diet plans for those undergoing treatments.</p>

                        <div className={styles.conclusion}>
                            <p>A wellness retreat in Kerala is not a luxury — it is a necessity. In a world of constant noise and acceleration, Eden Garden offers a rare opportunity to slow down, breathe deeply, and remember what it feels like to be truly well. We would be honoured to host your journey.</p>
                            <Link href="/booking" className={styles.bookBtn}>Begin Your Wellness Retreat →</Link>
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
