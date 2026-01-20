import React from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { motion } from 'framer-motion';

const AboutEvent = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('about'));

    if (loading) return null;
    if (!data) return null;

    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-bg-paper)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>{data.title}</h2>
                        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', marginBottom: '2rem' }}></div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                            {data.description}
                        </p>
                        <a href="#contact" className="btn btn-primary">Contact Organizers</a>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        {data.stats && data.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    backgroundColor: 'var(--color-bg-base)',
                                    borderRadius: 'var(--radius-lg)'
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutEvent;
