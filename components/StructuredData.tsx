"use client";

import Script from 'next/script';

export default function StructuredData() {
    const lodgingBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LodgingBusiness", "BedAndBreakfast"],
        "name": "Eden Garden Heritage Farmstay",
        "description": "Experience a 300-year-old heritage sanctuary in Fort Kochi. Sustainable farmstay with authentic Kerala soul, farm-to-table dining, and the best-rated heritage accommodation in Kochi.",
        "image": "https://edenstays.info/eden-garden-heritage-farmstay-exterior.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Fort Kochi",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "postalCode": "682001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.9674",
            "longitude": "76.2425"
        },
        "telephone": "+918086477654",
        "priceRange": "₹₹",
        "starRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Free WiFi",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Breakfast Included",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Air Conditioning",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Garden",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Parking",
                "value": true
            }
        ],
        "checkinTime": "14:00",
        "checkoutTime": "11:00",
        "petsAllowed": false,
        "smokingAllowed": false,
        "url": "https://edenstays.info",
        "sameAs": [
            "https://www.instagram.com/edengardenkochi",
            "https://www.facebook.com/edengardenkochi"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What time is check-in and check-out?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request."
                }
            },
            {
                "@type": "Question",
                "name": "Is breakfast included?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! All our rooms include a complimentary bed and breakfast. We serve authentic Kerala cuisine with farm-to-table ingredients."
                }
            },
            {
                "@type": "Question",
                "name": "Are pets allowed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are a pet-friendly farmstay. Please inform us in advance if you're bringing pets."
                }
            },
            {
                "@type": "Question",
                "name": "How do I make a booking?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book directly through our website by clicking the 'Book Now' button, or contact us via WhatsApp at +918086477654."
                }
            },
            {
                "@type": "Question",
                "name": "What are the room rates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Tree House is ₹5,000 per night, and our Deluxe Rooms (Double and Triple occupancy) are ₹3,500 per night. All rates include breakfast."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="lodging-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(lodgingBusinessSchema)
                }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />
        </>
    );
}
