import React from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { motion } from 'framer-motion';

const DepartmentOverview = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('department'));

    if (loading) return null;
    if (!data) return null;

    return (
        <section id="department" className="section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                    <h2 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{data.title}</h2>
                    <div style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-primary)', margin: '0 auto', opacity: 0.2 }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Vision */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'white' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--color-accent)' }}>👁</span> Vision
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>{data.vision}</p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'white' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--color-accent)' }}>🎯</span> Mission
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.mission.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'start' }}>
                                    <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Programs */}
                    {data.programs && data.programs.length > 0 && (
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass-panel"
                            style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'white' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-accent)' }}>🎓</span> Programs
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {data.programs.map((program, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: 'var(--radius-full)',
                                            backgroundColor: 'var(--color-bg-base)',
                                            color: 'var(--color-primary)',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            border: '1px solid #e2e8f0'
                                        }}
                                    >
                                        {program}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default DepartmentOverview;
