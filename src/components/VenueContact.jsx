import React from 'react';
import useFetch from '../hooks/useFetch';
import { contentService } from '../api/contentService';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const VenueContact = () => {
    const { data, loading, error } = useFetch(() => contentService.getSection('contact'));

    // We can fetch Venue location from Hero sec essentially or a separate endpoint, 
    // but for now we'll simulate or just use static map for this example since specific coordinates weren't in basic JSON
    // Updating mock data to include coordinates would be ideal, but standard iframe embed is fine.

    if (loading) return null;
    if (!data) return null;

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Venue & Contact</h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
                        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'white' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Get in Touch</h3>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Email Us</p>
                                    <p style={{ fontWeight: '500' }}>{data.email}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Call Us</p>
                                    <p style={{ fontWeight: '500' }}>{data.phone}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Visit Us</p>
                                    <p style={{ fontWeight: '500' }}>{data.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div style={{ height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.3967455841675!2d78.71929847368811!3d17.344631804038418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0b34520e1c4f%3A0xdff09e04f19241ea!2sVignan%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1768946234675!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Event Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VenueContact;
