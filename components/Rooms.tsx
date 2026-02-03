"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Rooms.module.css';

const rooms = [
    {
        id: 1,
        name: "Tree House",
        category: "tree-house",
        desc: "Unique elevated tree house experience with double occupancy. Experience nature from above in our charming non-AC treehouse retreat.",
        availability: "1 room available",
        occupancy: "Double Occupancy",
        amenities: "Non-AC",
        price: 5000,
        priceStr: "₹5,000",
        images: [
            "/tree-house-double-occupancy-stay.jpg",
            "/tree-house-gallery-1.jpg",
            "/tree-house-gallery-2.jpg",
            "/tree-house-gallery-3.jpg",
            "/tree-house-gallery-4.jpg",
            "/tree-house-gallery-5.jpg",
            "/tree-house-gallery-6.jpg",
            "/tree-house-gallery-7.jpg",
            "/tree-house-gallery-8.jpg",
            "/tree-house-gallery-9.jpg",
            "/tree-house-gallery-10.jpg",
            "/tree-house-gallery-11.jpg",
        ]
    },
    {
        id: 2,
        name: "Deluxe Room",
        category: "deluxe-double",
        desc: "Spacious deluxe room with modern AC amenities and double occupancy. Perfect blend of comfort and traditional Kerala charm.",
        availability: "3 rooms available",
        occupancy: "Double Occupancy",
        amenities: "AC",
        price: 3500,
        priceStr: "₹3,500",
        images: [
            "/deluxe-double-room-ac-fort-kochi.jpg",
            "/deluxe-double-gallery-1.jpg",
            "/deluxe-double-gallery-2.jpg",
            "/deluxe-double-gallery-3.jpg",
            "/deluxe-double-gallery-4.jpg",
        ]
    },
    {
        id: 3,
        name: "Deluxe Room",
        category: "deluxe-triple",
        desc: "Premium deluxe accommodation with AC for triple occupancy. Ideal for families or small groups seeking comfort and space.",
        availability: "1 room available",
        occupancy: "Triple Occupancy",
        amenities: "AC",
        price: 3500,
        priceStr: "₹3,500",
        images: [
            "/deluxe-triple-room-ac-kerala.jpg",
            "/deluxe-triple-gallery-1.jpg",
            "/deluxe-triple-gallery-2.jpg",
            "/deluxe-triple-gallery-3.jpg",
            "/deluxe-triple-gallery-4.jpg",
        ]
    }
];

const Rooms = () => {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({
        1: 0,
        2: 0,
        3: 0
    });

    const nextImage = (roomId: number, totalImages: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => ({
            ...prev,
            [roomId]: (prev[roomId] + 1) % totalImages
        }));
    };

    const prevImage = (roomId: number, totalImages: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => ({
            ...prev,
            [roomId]: (prev[roomId] - 1 + totalImages) % totalImages
        }));
    };

    const handleBookClick = (roomId: number) => {
        router.push(`/booking?room=${roomId}`);
    };

    return (
        <section className={styles.rooms} id="rooms">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.eyebrow}>Our Sanctuaries</span>
                    <h2 className={styles.title}>Go in and explore <br />your heritage stay.</h2>
                </motion.div>

                <div className={styles.grid}>
                    {rooms.map((room, idx) => (
                        <motion.div
                            key={room.id}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={room.images[currentImageIndex[room.id]]}
                                    alt={`${room.name} - ${room.occupancy}`}
                                    className={styles.roomImage}
                                />
                                {room.images.length > 1 && (
                                    <>
                                        <button
                                            className={`${styles.navBtn} ${styles.navBtnPrev}`}
                                            onClick={(e) => prevImage(room.id, room.images.length, e)}
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            className={`${styles.navBtn} ${styles.navBtnNext}`}
                                            onClick={(e) => nextImage(room.id, room.images.length, e)}
                                            aria-label="Next image"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                        <div className={styles.imageCounter}>
                                            {currentImageIndex[room.id] + 1} / {room.images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.roomHeader}>
                                    <h3 className={styles.roomName}>{room.name}</h3>
                                    <span className={styles.availability}>{room.availability}</span>
                                </div>
                                <div className={styles.roomMeta}>
                                    <span className={styles.metaItem}>{room.occupancy}</span>
                                    <span className={styles.metaDivider}>•</span>
                                    <span className={styles.metaItem}>{room.amenities}</span>
                                    <span className={styles.metaDivider}>•</span>
                                    <span className={styles.metaItem}>Bed & Breakfast Included</span>
                                </div>
                                <p className={styles.roomDesc}>{room.desc}</p>
                                <div className={styles.footer}>
                                    <div className={styles.priceBox}>
                                        <span className={styles.price}>{room.priceStr}</span>
                                        <small className={styles.perNight}>/night</small>
                                    </div>
                                    <button onClick={() => handleBookClick(room.id)} className={styles.bookBtn}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
