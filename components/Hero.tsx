"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import styles from './Hero.module.css';

const frameCount = 120;

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Bind the scroll progress to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to frame index (0 to 119)
    // We use a small buffer at the end to ensure we reach the last frame
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `/hero-slider/ezgif-frame-${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Draw frame on canvas
    const renderFrame = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Draw image to cover the canvas (background-size: cover equivalent)
        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        } else {
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imgRatio;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform ensures clearRect works as expected if scaled
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1); // Re-apply scale for HDPI
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial setup and resize handler
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Re-render current frame after resize
            const currentFrame = Math.min(
                Math.floor(frameIndex.get()),
                frameCount - 1
            );
            renderFrame(currentFrame);
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, [imagesLoaded, images]);

    // Handle scroll updates
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (imagesLoaded) {
            const frameToRender = Math.min(Math.floor(latest), frameCount - 1);
            requestAnimationFrame(() => renderFrame(frameToRender));
        }
    });

    return (
        <article ref={containerRef} className={styles.hero} id="hero">
            <div className={styles.stickyContainer}>
                <div className={styles.canvasWrapper}>
                    <canvas ref={canvasRef} className={styles.heroCanvas} />
                </div>

                <div className={styles.container}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            A 300-Year Heritage
                            <br />
                            <span className={styles.highlight}>Sanctuary Awaits</span>
                        </motion.h1>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <button
                                className={styles.primaryBtn}
                                onClick={() => {
                                    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Check Availability
                            </button>
                            <button
                                className={styles.secondaryBtn}
                                onClick={() => {
                                    document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Know More
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </article>
    );
};

export default Hero;
