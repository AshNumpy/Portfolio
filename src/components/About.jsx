import React from 'react';
import { cvData } from '../data/cvData';
import { FaDownload } from 'react-icons/fa';
import cvPdf from '../assets/ramazan-cv.pdf';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container-v5">

                <div className="about-flex-layout-v6">
                    {/* Group X: Title and Summary together */}
                    <div className="about-info-group-v6">
                        <h2 className="about-title-uppercase-v6">ABOUT</h2>
                        <div className="about-text-v6">
                            <p className="summary-p-v6">
                                {cvData.summary}
                            </p>
                        </div>
                    </div>

                    {/* Circle Wrapper beside Group X */}
                    <div className="about-circle-wrapper-v6">
                        <div className="rotating-text-v6">
                            <svg viewBox="0 0 100 100" width="100%" height="100%">
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                <text fontWeight="800" fontSize="6.5">
                                    <textPath href="#circlePath" startOffset="0%" fill="var(--primary-100)" letterSpacing="5px">
                                        GET CV • GET CV • GET CV • GET CV •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="dashed-inner-circle"></div>
                        <a href={cvPdf} download="Ramazan_Erduran_CV.pdf" className="cv-btn-v3" title="Download CV">
                            <FaDownload />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
