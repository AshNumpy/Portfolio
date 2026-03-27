import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLatestProjects } from '../services/cmsApi';
import { FaArrowRight } from 'react-icons/fa';
import './Works.css';

const Works = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchLatestProjects(2);
                setProjects(data);
            } catch (err) {
                console.error('Failed to load projects:', err);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <section className="works-section" id="works">
            <div className="container flex-works">
                <h2 className="works-title-uppercase">WORKS</h2>

                <div className="works-list-container">
                    {!loading && projects.map((proj, index) => (
                        <div key={proj.id || index} className="work-row-v2">
                            <div className="work-year-v2">{formatDate(proj.date)}</div>
                            <div className="work-info-v2">
                                <h3 className="work-name-v2">{proj.header.toUpperCase()}</h3>
                                <p className="work-tag-v2">{proj.description.substring(0, 100)}...</p>
                            </div>
                            <Link to={`/works#project-${proj.id}`} className="work-btn-v2">
                                Explore <span className="arrow-icon"><FaArrowRight /></span>
                            </Link>
                        </div>
                    ))}

                    {/* View All Projects Button */}
                    <div className="view-all-projects-row">
                        <Link to="/works" className="view-all-btn">
                            <span>VIEW ALL PROJECTS</span>
                            <span className="arrow-icon"><FaArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
