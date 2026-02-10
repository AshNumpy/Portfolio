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
                                <a href={cvData.personalInfo.links.medium} target="_blank" rel="noopener noreferrer"><FaMedium /></a>
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
