import React from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { FaMicrophoneAlt, FaUsers, FaMusic, FaUtensils } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
    "FaMicrophoneAlt": <FaMicrophoneAlt />,
    "FaUsers": <FaUsers />,
    "FaMusic": <FaMusic />,
    "FaUtensils": <FaUtensils />
};

const EventHighlights = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('highlights'));

    if (loading) return null;
    if (!data) return null;

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Event Highlights</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto', opacity: 0.8 }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {data.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                color: 'var(--color-accent)',
                                marginBottom: '1.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            }}>
                                {iconMap[item.icon] || <span>✨</span>}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>{item.title}</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventHighlights;
