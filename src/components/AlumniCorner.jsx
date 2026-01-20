import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AlumniCorner = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('alumni'));
    const [activeIndex, setActiveIndex] = useState(0);

    if (loading) return null;
    if (!data) return null;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <section id="alumni" className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Alumni Speak</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', minHeight: '350px' }}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginBottom: '2rem',
                                border: '4px solid var(--color-accent)'
                            }}>
                                <img src={data[activeIndex].image} alt={data[activeIndex].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <FaQuoteLeft style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem' }} />

                            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>
                                "{data[activeIndex].quote}"
                            </p>

                            <div>
                                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-accent)' }}>{data[activeIndex].name}</h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Class of {data[activeIndex].batch}</p>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{data[activeIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                        <button onClick={prevSlide} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '50px' }}>&lsaquo;</button>
                        <button onClick={nextSlide} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '50px' }}>&rsaquo;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlumniCorner;
