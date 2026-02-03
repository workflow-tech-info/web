"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Users, User, Mail, Phone, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

const rooms = [
    {
        id: 1,
        name: "Tree House",
        desc: "Elevated tree house with double occupancy, Non-AC",
        image: "/tree-house-double-occupancy-stay.jpg",
        price: 5000,
        priceStr: "₹5,000",
        availability: "1 room available",
        occupancy: "Double Occupancy",
        amenities: "Non-AC"
    },
    {
        id: 2,
        name: "Deluxe Room (Double)",
        desc: "Spacious deluxe room with AC, double occupancy",
        image: "/deluxe-double-room-ac-fort-kochi.jpg",
        price: 3500,
        priceStr: "₹3,500",
        availability: "3 rooms available",
        occupancy: "Double Occupancy",
        amenities: "AC"
    },
    {
        id: 3,
        name: "Deluxe Room (Triple)",
        desc: "Premium deluxe room with AC, triple occupancy",
        image: "/deluxe-triple-room-ac-kerala.jpg",
        price: 3500,
        priceStr: "₹3,500",
        availability: "1 room available",
        occupancy: "Triple Occupancy",
        amenities: "AC"
    }
];

interface GuestDetail {
    name: string;
    email: string;
    phone: string;
}

export default function BookingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const preSelectedId = searchParams.get('room');

    const [selectedRoom, setSelectedRoom] = useState<number | null>(
        preSelectedId ? parseInt(preSelectedId) : null
    );
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guestCount, setGuestCount] = useState(2);
    const [guestDetails, setGuestDetails] = useState<GuestDetail[]>([
        { name: '', email: '', phone: '' },
        { name: '', email: '', phone: '' }
    ]);

    const handleGuestCountChange = (count: number) => {
        setGuestCount(count);
        const newDetails = Array.from({ length: count }, (_, i) =>
            guestDetails[i] || { name: '', email: '', phone: '' }
        );
        setGuestDetails(newDetails);
    };

    const handleGuestDetailChange = (index: number, field: keyof GuestDetail, value: string) => {
        const newDetails = [...guestDetails];
        newDetails[index] = { ...newDetails[index], [field]: value };
        setGuestDetails(newDetails);
    };

    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const selectedRoomData = rooms.find(r => r.id === selectedRoom);
    const nights = calculateNights();
    const totalPrice = selectedRoomData && nights > 0 ? selectedRoomData.price * nights : 0;

    const handleSubmit = () => {
        if (!selectedRoom) {
            alert("Please select a room to proceed.");
            return;
        }
        if (!checkIn || !checkOut) {
            alert("Please select check-in and check-out dates.");
            return;
        }
        if (guestDetails[0].name === '' || guestDetails[0].email === '' || guestDetails[0].phone === '') {
            alert("Please fill in at least the primary guest details (name, email, phone).");
            return;
        }

        const room = selectedRoomData;
        const guestNames = guestDetails.filter(g => g.name).map(g => g.name).join(', ');
        const primaryEmail = guestDetails[0].email;
        const primaryPhone = guestDetails[0].phone;

        const message = `Hello! I would like to book a room at Eden Garden Heritage Farmstay.

*Booking Details:*
Room: ${room?.name}
Check-in: ${new Date(checkIn).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
Check-out: ${new Date(checkOut).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
Nights: ${nights}
Guests: ${guestCount}

*Guest Details:*
${guestNames}

*Contact Information:*
Email: ${primaryEmail}
Phone: ${primaryPhone}

*Total Amount:* ₹${totalPrice.toLocaleString('en-IN')}

Looking forward to staying at your beautiful farmstay!`;

        const whatsappNumber = "918086477654";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={styles.page}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    <Link href="/" className={styles.logo}>
                        <Home size={20} />
                        <span>Eden Garden</span>
                    </Link>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    {/* Hero Section */}
                    <motion.div
                        className={styles.hero}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={styles.title}>Book Your Stay</h1>
                        <p className={styles.subtitle}>
                            Reserve your heritage sanctuary at Eden Garden Farmstay
                        </p>
                    </motion.div>

                    <div className={styles.content}>
                        {/* Date Selection */}
                        <motion.section
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h2 className={styles.sectionTitle}>
                                <Calendar size={24} />
                                Select Dates
                            </h2>
                            <div className={styles.dateFields}>
                                <div className={styles.dateField}>
                                    <label className={styles.label}>Check-in</label>
                                    <input
                                        type="date"
                                        className={styles.dateInput}
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div className={styles.dateField}>
                                    <label className={styles.label}>Check-out</label>
                                    <input
                                        type="date"
                                        className={styles.dateInput}
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        min={checkIn || new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>
                            {nights > 0 && (
                                <p className={styles.nightsInfo}>
                                    {nights} night{nights > 1 ? 's' : ''} selected
                                </p>
                            )}
                        </motion.section>

                        {/* Guest Count */}
                        <motion.section
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className={styles.sectionTitle}>
                                <Users size={24} />
                                Number of Guests
                            </h2>
                            <select
                                className={styles.guestSelect}
                                value={guestCount}
                                onChange={(e) => handleGuestCountChange(Number(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <option key={num} value={num}>
                                        {num} Guest{num > 1 ? 's' : ''}
                                    </option>
                                ))}
                            </select>
                        </motion.section>

                        {/* Room Selection */}
                        <motion.section
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className={styles.sectionTitle}>Select Room</h2>
                            <div className={styles.rooms}>
                                {rooms.map((room, index) => (
                                    <motion.div
                                        key={room.id}
                                        className={`${styles.roomCard} ${selectedRoom === room.id ? styles.selected : ''}`}
                                        onClick={() => setSelectedRoom(room.id)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    >
                                        <img src={room.image} alt={room.name} className={styles.roomImage} />
                                        <div className={styles.roomInfo}>
                                            <h3 className={styles.roomName}>{room.name}</h3>
                                            <p className={styles.roomDesc}>{room.desc}</p>
                                            <span className={styles.roomAvailability}>{room.availability}</span>
                                        </div>
                                        <div className={styles.roomPrice}>
                                            <span className={styles.price}>{room.priceStr}</span>
                                            <span className={styles.perNight}>/night</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Guest Details */}
                        <motion.section
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <h2 className={styles.sectionTitle}>
                                <User size={24} />
                                Guest Details
                            </h2>
                            <div className={styles.guestForms}>
                                {guestDetails.map((guest, index) => (
                                    <div key={index} className={styles.guestForm}>
                                        <h3 className={styles.guestTitle}>
                                            {index === 0 ? 'Primary Guest' : `Guest ${index + 1}`}
                                        </h3>
                                        <div className={styles.formGrid}>
                                            <div className={styles.formField}>
                                                <label className={styles.label}>
                                                    <User size={16} />
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className={styles.input}
                                                    placeholder="Enter full name"
                                                    value={guest.name}
                                                    onChange={(e) => handleGuestDetailChange(index, 'name', e.target.value)}
                                                    required={index === 0}
                                                />
                                            </div>
                                            {index === 0 && (
                                                <>
                                                    <div className={styles.formField}>
                                                        <label className={styles.label}>
                                                            <Mail size={16} />
                                                            Email *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className={styles.input}
                                                            placeholder="your@email.com"
                                                            value={guest.email}
                                                            onChange={(e) => handleGuestDetailChange(index, 'email', e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className={styles.formField}>
                                                        <label className={styles.label}>
                                                            <Phone size={16} />
                                                            Phone *
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            className={styles.input}
                                                            placeholder="+91 XXXXX XXXXX"
                                                            value={guest.phone}
                                                            onChange={(e) => handleGuestDetailChange(index, 'phone', e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Footer with Total */}
                    <motion.div
                        className={styles.footer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className={styles.totalSection}>
                            <div className={styles.totalInfo}>
                                <span className={styles.totalLabel}>Total Amount</span>
                                <span className={styles.totalValue}>
                                    {totalPrice > 0 ? `₹${totalPrice.toLocaleString('en-IN')}` : '---'}
                                </span>
                                {nights > 0 && selectedRoomData && (
                                    <span className={styles.breakdown}>
                                        {selectedRoomData.priceStr} × {nights} night{nights > 1 ? 's' : ''}
                                    </span>
                                )}
                            </div>
                            <button
                                className={styles.confirmBtn}
                                onClick={handleSubmit}
                            >
                                Continue on WhatsApp
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
