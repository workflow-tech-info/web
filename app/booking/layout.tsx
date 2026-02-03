import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Your Stay | Eden Garden Heritage Farmstay",
    description: "Reserve your room at Eden Garden Heritage Farmstay in Fort Kochi. Choose from our Tree House or Deluxe Rooms with breakfast included. Book directly via WhatsApp.",
    keywords: [
        "book Eden Garden Kochi", "Fort Kochi booking", "heritage farmstay reservation",
        "Kochi accommodation booking", "Kerala homestay booking", "book heritage stay"
    ],
    openGraph: {
        title: "Book Your Stay | Eden Garden Heritage Farmstay",
        description: "Reserve your heritage sanctuary in Fort Kochi. Tree House and Deluxe Rooms available.",
        url: "https://edengardenkochi.com/booking",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Your Stay | Eden Garden Heritage Farmstay",
        description: "Reserve your heritage sanctuary in Fort Kochi. Tree House and Deluxe Rooms available.",
    },
    alternates: {
        canonical: "https://edengardenkochi.com/booking",
    },
};

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
