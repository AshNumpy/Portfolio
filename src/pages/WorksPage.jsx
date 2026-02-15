import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { sortedProjectsData } from '../data/projectsData';
import './WorksPage.css';

// Dynamically import all project thumbnails
const projectImages = import.meta.glob('../assets/project-thumbnails/*.jpg', { eager: true, import: 'default' });

const WorksPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };

    // Get project image
    const getProjectImage = (project) => {
        if (!project.thumbnail) return 'none';

        const imagePath = `../assets/project-thumbnails/${project.thumbnail}`;
        if (projectImages[imagePath]) {
            return `url("${projectImages[imagePath]}")`;
        }

        // Try fallback if filename doesn't match exactly
        console.warn(`Image not found: ${imagePath}`);
        return 'none';
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
                <div className="projects-grid">
                    {sortedProjectsData.map((project, index) => (
                        <div key={index} className="project-card" style={{ backgroundImage: getProjectImage(project) }}>
                            <div className="project-card-header">
                                <span className="project-category">{project.category}</span>
                                <span className="project-date">{formatDate(project.date)}</span>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
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
            </div>
        </div>
    );
};

export default WorksPage;
