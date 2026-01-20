import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem 0 2rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <h2 style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '2rem', marginBottom: '0.5rem' }}>Dept. Day & Alumni Meet 2026</h2>
                        <p style={{ opacity: 0.7 }}>Celebrating the past, inspiring the future.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" className="social-link"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/itdept.vits?igsh=MW5jcTRtMjVkdGdk" className="social-link"><FaInstagram /></a>
                    </div>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginTop: '2rem' }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.6, fontSize: '0.9rem' }}>
                        <p>&copy; {new Date().getFullYear()} Department of Information Technology. All Rights Reserved.</p>
                        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            Designed by NextGen-Department Software Development Cell (NG-DSDC)
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
