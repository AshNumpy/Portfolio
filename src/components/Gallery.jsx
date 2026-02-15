import React from 'react';
import { Link } from 'react-router-dom';
import { cvData } from '../data/cvData';
import { FaTrophy, FaArrowRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery-section" id="gallery">
            <div className="container">
                <h2 className="gallery-title-uppercase">GALLERY</h2>

                <div className="gallery-intro">
                    <p>Explore a collection of achievements and certifications earned through data competitions and professional growth.</p>
                </div>

                <div className="gallery-modern-grid">
                    {cvData.achievements && cvData.achievements.map((item, index) => (
                        <div key={index} className="modern-gallery-item">
                            <div className="item-icon"><FaTrophy /></div>
                            <div className="item-content">
                                <h3 className="item-title">{item.title}</h3>
                                <span className="item-rank">{item.rank}</span>
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
