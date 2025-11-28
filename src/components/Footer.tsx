import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-tagline">
                        <p>Experience creative excellence</p>
                    </div>

                    <div className="footer-links-row">
                        <div className="footer-column">
                            <h4>Contact</h4>
                            <a href="mailto:hello@giftpayne.com">hello@giftpayne.com</a>
                            <a href="tel:+254700000000">+254 700 000 000</a>
                            <a href="#">Nairobi, Kenya</a>
                        </div>

                        <div className="footer-column">
                            <h4>Social</h4>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="footer-brand-large">
                    <h1>Gift Payne</h1>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Gift Payne Creative Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
