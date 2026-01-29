import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('gallery'));
    const [selectedImg, setSelectedImg] = useState(null);

    if (loading) return null;
    if (!data) return null;

    return (
        <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-bg-paper)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Memories Lane</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {data.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layoutId={`img-${item.id}`}
                            onClick={() => setSelectedImg(item)}
                            whileHover={{ scale: 1.03 }}
                            className="gallery-item"
                            style={{
                                height: '250px',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={item.url}
                                alt={item.caption}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div className="gallery-caption">
                                {item.caption}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImg && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImg(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.9)',
                                zIndex: 2000,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '2rem'
                            }}
                        >
                            <button
                                onClick={() => setSelectedImg(null)}
                                style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '2rem',
                                    background: 'none',
                                    color: 'white',
                                    fontSize: '2rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <FaTimes />
                            </button>

                            <motion.img
                                layoutId={`img-${selectedImg.id}`}
                                src={selectedImg.url}
                                alt={selectedImg.caption}
                                style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 'var(--radius-sm)' }}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '2rem',
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    textAlign: 'center'
                                }}
                            >
                                {selectedImg.caption}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
