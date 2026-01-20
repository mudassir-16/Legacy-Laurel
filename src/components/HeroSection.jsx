import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-accent)' }}>{value}</div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>{label}</div>
                </div>
            ))}
        </div>
    );
};

const HeroSection = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('hero'));

    if (loading) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a', color: 'white' }}>Loading...</div>;
    if (error) return <div className="text-red-500">Error loading content</div>;
    if (!data) return null;

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.7)), url(${data.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                color: 'white',
                textAlign: 'center',
                padding: '120px 1.5rem 4rem 1.5rem'
            }}
        >
            <div className="container" style={{ maxWidth: '1000px', zIndex: 2 }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'block',
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        textTransform: 'uppercase',
                        letterSpacing: 'clamp(2px, 1vw, 5px)',
                        marginBottom: '0.75rem',
                        marginTop: '1rem',
                        color: 'var(--color-accent)',
                        fontWeight: '700',
                        textShadow: '0 0 20px rgba(194, 157, 11, 0.3)',
                        lineHeight: '1.4'
                    }}
                >
                    {data.department}
                </motion.span>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{
                        display: 'block',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        marginBottom: '1rem',
                        opacity: 0.8
                    }}
                >
                    invites you to the
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                        color: 'white'
                    }}
                >
                    {data.title}
                </motion.h1>

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        display: 'block',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '1.5rem',
                        color: 'var(--color-accent)'
                    }}
                >
                    {data.subtitle}
                </motion.span>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}
                >
                    {data.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', marginTop: '2rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaCalendarAlt color="var(--color-accent)" /> <span>{data.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaMapMarkerAlt color="var(--color-accent)" /> <span>{data.venue}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div style={{ marginBottom: '3rem' }}>
                        <CountdownTimer targetDate={data.date} />
                    </div>
                    <a href="#schedule" className="btn btn-primary" style={{ marginRight: '1rem', minWidth: '160px' }}>View Schedule</a>
                    <a href="#about" className="btn btn-accent" style={{ minWidth: '160px' }} >Learn More</a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.7 }}
            >
                <div style={{ width: '2px', height: '30px', background: 'white', margin: '0 auto' }}></div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
