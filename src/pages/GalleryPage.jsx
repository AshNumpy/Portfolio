import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaArrowLeft, FaTrophy, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { galleryData } from '../data/galleryData';
import './GalleryPage.css';

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="gallery-page">
            <Navbar />

            <div className="gallery-page-hero">
                <div className="container">
                    <Link to="/" className="back-button">
                        <FaArrowLeft /> Back to Home
                    </Link>
                    <h1 className="gallery-page-title">GALLERY</h1>
                    <p className="gallery-page-subtitle">
                        A collection of achievements, datathon victories, and professional certifications.
                    </p>
                </div>
            </div>

            <div className="container gallery-page-content">

                {/* Achievements Section */}
                <section className="gallery-section-block">
                    <div className="section-header">
                        <FaTrophy className="section-icon" />
                        <h2>Achievements & Datathons</h2>
                    </div>

                    <div className="achievements-grid">
                        {galleryData.achievements.map((item, index) => (
                            <div key={index} className="achievement-card">
                                <div className="achievement-header">
                                    <span className="achievement-date">{item.date}</span>
                                    <span className="achievement-rank">#{item.rank}</span>
                                </div>
                                <h3 className="achievement-title">{item.title}</h3>
                                <div className="achievement-details">
                                    <span>Top {item.rank} of {item.competitors} participants</span>
                                </div>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="achievement-link"
                                >
                                    View details <FaExternalLinkAlt />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="gallery-section-block">
                    <div className="section-header">
                        <FaCertificate className="section-icon" />
                        <h2>Certificates</h2>
                    </div>

                    <div className="certificates-container">
                        {galleryData.certificates.map((issuer, index) => (
                            <div key={index} className="certificate-group">
                                <h3 className="issuer-title">{issuer.issuer}</h3>
                                <div className="certificates-list">
                                    {issuer.items.map((cert, certIndex) => (
                                        <a
                                            key={certIndex}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certificate-item"
                                        >
                                            <span className="cert-name">{cert.name}</span>
                                            <FaExternalLinkAlt className="cert-icon" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default GalleryPage;
