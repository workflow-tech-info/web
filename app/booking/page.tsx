import { Suspense } from 'react';
import BookingForm from './BookingForm';
import styles from './page.module.css';

// Loading fallback component
function BookingFormSkeleton() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.backLink} style={{ opacity: 0.5 }}>
                        Loading...
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.hero}>
                        <h1 className={styles.title}>Book Your Stay</h1>
                        <p className={styles.subtitle}>Loading booking form...</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Server component - default export
export default function BookingPage() {
    return (
        <Suspense fallback={<BookingFormSkeleton />}>
            <BookingForm />
        </Suspense>
    );
}
