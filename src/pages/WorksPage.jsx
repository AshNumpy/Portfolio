import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { fetchProjectsWithImages } from '../services/cmsApi';
import './WorksPage.css';

const WorksPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                const data = await fetchProjectsWithImages();
                const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
                setProjects(sorted);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };

    const getProjectImage = (project) => {
        if (!project.thumbnail) return 'none';
        return `url("${project.thumbnail}")`;
    };

    return (
        <div className="works-page">
            <Navbar />

            <div className="works-page-hero">
                <div className="container">
                    <Link to="/" className="back-button">
                        <FaArrowLeft /> Back to Home
                    </Link>
                    <h1 className="works-page-title">ALL PROJECTS</h1>
                    <p className="works-page-subtitle">
                        A comprehensive collection of data science, machine learning, and analytics projects
                    </p>
                </div>
            </div>

            <div className="container works-page-content">
                {loading && (
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p>Loading projects...</p>
                    </div>
                )}

                {error && (
                    <div className="error-container">
                        <p>Error loading projects: {error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={project.id || index} className="project-card" style={{ backgroundImage: getProjectImage(project) }}>
                                <div className="project-card-header">
                                    <span className="project-category">{project.tag}</span>
                                    <span className="project-date">{formatDate(project.date)}</span>
                                </div>
                                <h3 className="project-title">{project.header}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.specialLink && (
                                        <a
                                            href={project.specialLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link-demo"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorksPage;
