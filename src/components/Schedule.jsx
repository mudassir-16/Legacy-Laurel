import React from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { motion } from 'framer-motion';

const Schedule = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('schedule'));

    if (loading) return null;
    if (!data) return null;

    return (
        <section id="schedule" className="section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Event Schedule</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {data.map((slot, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="schedule-item"
                        >
                            {/* Time Column */}
                            <div className="schedule-time">
                                {slot.time}
                            </div>

                            {/* Connector */}
                            <div className="schedule-connector">
                                <div className="schedule-dot"></div>
                            </div>

                            {/* Event Details */}
                            <div
                                className="glass-panel schedule-content"
                                style={{
                                    flex: 1,
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    backgroundColor: 'white',
                                    borderLeft: '4px solid var(--color-accent)'
                                }}
                            >
                                <h4 style={{ fontSize: '1.2rem', marginBottom: 0 }}>{slot.event}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
