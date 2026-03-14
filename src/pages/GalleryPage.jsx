import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaArrowLeft, FaTrophy, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { fetchAchievements, fetchCertificates } from '../services/cmsApi';
import './GalleryPage.css';

const GalleryPage = () => {
    const [achievements, setAchievements] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [achievementsData, certificatesData] = await Promise.all([
                    fetchAchievements(),
                    fetchCertificates()
                ]);
                
                const sortedAchievements = [...achievementsData].sort((a, b) => new Date(b.date) - new Date(a.date));
                const sortedCertificates = [...certificatesData].sort((a, b) => new Date(b.date) - new Date(a.date));
                
                setAchievements(sortedAchievements);
                setCertificates(sortedCertificates);
            } catch (err) {
                console.error('Failed to load gallery:', err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const certificatesByIssuer = certificates.reduce((acc, cert) => {
        const issuer = cert.header;
        if (!acc[issuer]) {
            acc[issuer] = [];
        }
        acc[issuer].push(cert);
        return acc;
    }, {});

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
                        {achievements.map((item, index) => (
                            <div key={item.id || index} className="achievement-card">
                                <div className="achievement-header">
                                    <span className="achievement-date">{formatDate(item.date)}</span>
                                    <span className="achievement-rank">#{item.rank}</span>
                                </div>
                                <h3 className="achievement-title">{item.header}</h3>
                                <div className="achievement-details">
                                    <span>{item.description}</span>
                                </div>
                                <div className="achievement-actions">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="achievement-link"
                                    >
                                        View details <FaExternalLinkAlt />
                                    </a>
                                    {item.specialLink && (
                                        <a
                                            href={item.specialLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="achievement-link presentation-link"
                                        >
                                            {item.specialLinkHeader || 'Presentation'} <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
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
                        {Object.entries(certificatesByIssuer).map(([issuer, certs]) => (
                            <div key={issuer} className="certificate-group">
                                <h3 className="issuer-title">{issuer}</h3>
                                <div className="certificates-list">
                                    {certs.map((cert, index) => (
                                        <a
                                            key={cert.id || index}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certificate-item"
                                        >
                                            <span className="cert-name">{cert.description}</span>
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
