import React from 'react';
import { Link } from 'react-router-dom';
import { cvData } from '../data/cvData';
import { FaArrowRight } from 'react-icons/fa';
import './Works.css';

const Works = () => {
    return (
        <section className="works-section" id="works">
            <div className="container flex-works">
                <h2 className="works-title-uppercase">WORKS</h2>

                <div className="works-list-container">
                    {cvData.projects.map((proj, index) => (
                        <div key={index} className="work-row-v2">
                            <div className="work-year-v2">2023 - 2024</div>
                            <div className="work-info-v2">
                                <h3 className="work-name-v2">{proj.title.toUpperCase()}</h3>
                                <p className="work-tag-v2">{proj.description.substring(0, 100)}...</p>
                            </div>
                            <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="work-btn-v2">
                                Explore <span className="arrow-icon"><FaArrowRight /></span>
                            </a>
                        </div>
                    ))}

                    {/* View All Projects Button */}
                    <div className="view-all-projects-row">
                        <Link to="/works" className="view-all-btn">
                            VIEW ALL PROJECTS <span className="arrow-icon"><FaArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
