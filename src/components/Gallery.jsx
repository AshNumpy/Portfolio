import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAchievements } from '../services/cmsApi';
import { FaTrophy, FaArrowRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAchievements = async () => {
            try {
                const data = await fetchAchievements();
                const sorted = [...data].sort((a, b) => (a.rank || 999) - (b.rank || 999));
                setAchievements(sorted.slice(0, 3));
            } catch (err) {
                console.error('Failed to load achievements:', err);
            } finally {
                setLoading(false);
            }
        };

        loadAchievements();
    }, []);

    return (
        <section className="gallery-section" id="gallery">
            <div className="container">
                <h2 className="gallery-title-uppercase">GALLERY</h2>

                <div className="gallery-intro">
                    <p>Explore a collection of achievements and certifications earned through data competitions and professional growth.</p>
                </div>

                <div className="gallery-modern-grid">
                    {!loading && achievements.map((item, index) => (
                        <div key={item.id || index} className="modern-gallery-item">
                            <div className="item-icon"><FaTrophy /></div>
                            <div className="item-content">
                                <h3 className="item-title">{item.header}</h3>
                            <span className="item-rank">{item.description}</span>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-view-btn">VIEW</a>
                        </div>
                    ))}

                    {/* View All Gallery Card */}
                    <Link to="/gallery" className="modern-gallery-item view-all-gallery-card">
                        <div className="item-icon"><FaArrowRight /></div>
                        <div className="item-content">
                            <h3 className="item-title">VIEW FULL GALLERY</h3>
                            <span className="item-rank">More Achievements & Certificates</span>
                        </div>
                        <span className="item-view-btn">OPEN</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
