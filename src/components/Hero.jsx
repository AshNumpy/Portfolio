import React from 'react';
import { cvData } from '../data/cvData';
import { FaLinkedin, FaGithub, FaMedium, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Main Title at the top */}
                <div className="hero-title-wrapper-v4">
                    <h1 className="hero-full-width-title">Ramazan Erduran</h1>
                </div>

                {/* Giant Background Text - 2 Rows */}
                <div className="giant-bg-overlay-2rows-v4">
                    <span>BI • DATA • ANALYTICS • INSIGHTS • ARCHITECTURE • VISUALIZATION • STRATEGY • SQL • PYTHON • ETL • DASHBOARDS • BIG DATA • MACHINE LEARNING • DATA WAREHOUSING • CLOUD • AUTOMATION • QLIK SENSE • CONSULTING</span>
                </div>

                <div className="hero-content-inner-v5">
                    <div className="hero-mid-elements-v5">
                        {/* Relocated and shifted: Total 340px up (170+170), 90px right */}
                        <div className="hero-desc-group-v6">
                            <p className="hero-small-desc-v3">
                                What makes my data architecture unique is the combination of technical expertise and analytical depth.
                            </p>
                            <div className="hero-socials-v5">
                                <a href={cvData.personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href={cvData.personalInfo.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href={cvData.personalInfo.links.medium} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                                </a>
                            </div>
                        </div>

                        {/* CTA text shifted further down */}
                        <div className="hero-cta-box-v6">
                            <p className="hero-cta-text-v3">
                                Immerse yourself in a world where data tells a story, capturing the beauty of patterns and insights.
                            </p>
                        </div>
                    </div>

                    <div className="hero-bottom-elements-v5">
                        <a href="#contact" className="scroll-hint-btn-v3">
                            <FaArrowDown />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
