import React from 'react';
import { cvData } from '../data/cvData';
import { FaArrowUp, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

import TextMorphism from './TextMorphism';

const Contact = () => {
    const keywords = ["DATA ENGINEERING", "BUSINESS INTELLIGENCE", "QLIK SENSE", "SQL SERVER", "PYTHON", "MACHINE LEARNING", "DATA ARCHITECTURE"];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="contact-section" id="contact">
            <div className="container">

                {/* Large Rounded Contact Box */}
                <div className="contact-box-container-v6">
                    <div className="contact-title-width-limited">
                        <div className="contact-box-title-wrapper-v6">
                            <h2 className="contact-box-title-v6">CONTACT ME</h2>
                        </div>

                        <div className="contact-box-inner-v6">
                            <div className="dash-placeholder-v6">
                                <div className="dash-screen">
                                    <div className="dash-line line-long"></div>
                                    <div className="dash-line line-short"></div>
                                </div>
                                <div className="dash-knob"></div>
                            </div>
                            <div className="contact-text-side">
                                <p className="contact-invitation">
                                    Got a project in mind? Let's turn your data into actionable insights and beautiful experiences.
                                </p>

                                <a href={`mailto:${cvData.personalInfo.email}`} className="send-mail-btn-v4">
                                    <span>Send Mail</span>
                                    <div className="icon-circle-v4">
                                        <FaPaperPlane className="plane-icon-v4" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Morphism Effect replacing Marquee */}
                <div className="footer-morphism-wrapper">
                    <TextMorphism texts={keywords} morphTime={1.0} cooldownTime={1.0} />
                </div>

                <div className="footer-bottom-flex">
                    <div className="footer-links-v2">
                        <a href="#about">About</a>
                        <a href="#works">Works</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="back-to-top-container">
                        <button className="scroll-top-btn" onClick={scrollToTop} title="Back to Top">
                            <FaArrowUp />
                        </button>
                    </div>

                    <p className="copyright-v2">© {new Date().getFullYear()} Ramazan Erduran. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
