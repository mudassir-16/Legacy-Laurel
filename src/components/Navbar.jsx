import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';
// Using inline styles for specific layout adjustments or modules if needed, 
// but mostly relying on global CSS classes defined in index.css

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Department', id: 'department' },
        { name: 'Schedule', id: 'schedule' },
        { name: 'Alumni', id: 'alumni' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                color: scrolled ? 'var(--color-primary)' : 'white' // Assuming hero is dark
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    className="logo"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        fontWeight: '700',
                        fontFamily: '"Times New Roman", Times, serif',
                        cursor: 'pointer'
                    }}
                    onClick={() => scrollToSection('hero')}
                >
                    <img src="/logo.png" alt="Logo" style={{ height: '45px', width: 'auto', borderRadius: '4px' }} />
                    <span className="nav-title">Legacy & Laurels</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'block', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            backgroundColor: 'var(--color-bg-paper)',
                            padding: '2rem',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            color: 'var(--color-text-main)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            textAlign: 'center'
                        }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                style={{ background: 'none', border: 'none', fontSize: '1.1rem', fontWeight: '500', color: 'var(--color-primary)' }}
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 480px) {
                    .nav-title { display: none; }
                }
                @media (min-width: 768px) {
                    .desktop-menu { display: flex !important; }
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
