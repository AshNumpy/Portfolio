import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { fetchProjectsWithImages } from '../services/cmsApi';
import { cvData } from '../data/cvData';
import './WorksPage.css';

const parseMarkdown = (text) => {
    if (!text) return [];
    
    const lines = text.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = [];
    let codeLanguage = '';
    let inList = false;
    let listItems = [];
    
    const flushList = () => {
        if (listItems.length > 0) {
            elements.push({ type: 'ul', items: [...listItems] });
            listItems = [];
            inList = false;
        }
    };
    
    const flushCodeBlock = () => {
        elements.push({ type: 'code-block', language: codeLanguage, content: codeContent.join('\n') });
        codeContent = [];
        codeLanguage = '';
        inCodeBlock = false;
    };
    
    lines.forEach((line, index) => {
        if (line.startsWith('```')) {
            if (inCodeBlock) {
                flushCodeBlock();
            } else {
                flushList();
                inCodeBlock = true;
                codeLanguage = line.slice(3).trim();
            }
            return;
        }
        
        if (inCodeBlock) {
            codeContent.push(line);
            return;
        }
        
        if (line.trim() === '') {
            flushList();
            return;
        }
        
        if (line.match(/^[-*_]{3,}$/)) {
            flushList();
            elements.push({ type: 'hr' });
            return;
        }
        
        if (line.match(/^#{1,6}\s/)) {
            flushList();
            const match = line.match(/^(#{1,6})\s(.+)/);
            if (match) {
                elements.push({ type: `h${match[1].length}`, content: match[2] });
            }
            return;
        }
        
        if (line.match(/^[-*]\s/)) {
            inList = true;
            listItems.push(line.replace(/^[-*]\s/, ''));
            return;
        }
        
        if (line.match(/^\d+\.\s/)) {
            inList = true;
            listItems.push(line.replace(/^\d+\.\s/, ''));
            return;
        }
        
        flushList();
        
        if (line.startsWith('|')) {
            const cells = line.split('|').filter(cell => cell.trim() && !cell.match(/^-+$/));
            if (cells.length > 0) {
                elements.push({ type: 'table-row', cells: cells.map(c => c.trim()) });
            }
            return;
        }
        
        elements.push({ type: 'paragraph', content: line });
    });
    
    if (inCodeBlock) flushCodeBlock();
    if (inList) flushList();
    
    return elements;
};

const renderInlineFormatting = (text) => {
    let result = text;
    
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
    result = result.replace(/`(.+?)`/g, '<code>$1</code>');
    result = result.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return result;
};

const MarkdownRenderer = ({ content }) => {
    const elements = parseMarkdown(content);
    
    return (
        <div className="markdown-renderer">
            {elements.map((el, index) => {
                switch (el.type) {
                    case 'h1':
                        return <h1 key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'h2':
                        return <h2 key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'h3':
                        return <h3 key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'h4':
                        return <h4 key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'h5':
                        return <h5 key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'h6':
                        return <h6 key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'paragraph':
                        return <p key={index} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(el.content) }} />;
                    case 'ul':
                        return (
                            <ul key={index}>
                                {el.items.map((item, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(item) }} />
                                ))}
                            </ul>
                        );
                    case 'code-block':
                        return (
                            <pre key={index} className="code-block">
                                <code>{el.content}</code>
                            </pre>
                        );
                    case 'hr':
                        return <hr key={index} className="markdown-divider" />;
                    case 'table-row':
                        return (
                            <div key={index} className="table-row">
                                {el.cells.map((cell, i) => (
                                    <span key={i} className="table-cell">{cell}</span>
                                ))}
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

const MarkdownModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const getMarkdownContent = () => {
        if (!project.link) return '';
        if (project.link.startsWith(':markdown:')) {
            return project.link.substring(10).trim();
        }
        return project.link;
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-header-info">
                        <h2>{project.header || 'Project Details'}</h2>
                        <div className="modal-tags">
                            {project.tags && project.tags.map((tag, index) => (
                                <span key={index} className="modal-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                {project.thumbnail && (
                    <div className="modal-thumbnail" style={{ backgroundImage: `url("${project.thumbnail}")` }}></div>
                )}
                <div className="modal-body">
                    <MarkdownRenderer content={getMarkdownContent()} />
                </div>
                <div className="modal-footer">
                    <a href={`mailto:${cvData.personalInfo.email}`} className="modal-contact-btn">
                        <span>Contact Me</span>
                        <FaPaperPlane />
                    </a>
                </div>
            </div>
        </div>
    );
};

const WorksPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalContent, setModalContent] = useState(null);

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

    const hasMarkdownContent = (link) => {
        return link && link.startsWith(':markdown:');
    };

    const getDisplayLink = (link) => {
        if (hasMarkdownContent(link)) return null;
        return link;
    };

    const handleShowDetails = (project) => {
        setModalContent(project);
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
                            <div key={project.id || index} id={`project-${project.id}`} className="project-card" style={{ backgroundImage: getProjectImage(project) }}>
                                <div className="project-card-header">
                                    <span className="project-category">{project.tag}</span>
                                    <span className="project-date">{formatDate(project.date)}</span>
                                </div>
                                <h3 className="project-title">{project.header}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-links">
                                    {hasMarkdownContent(project.link) && (
                                        <button
                                            onClick={() => handleShowDetails(project)}
                                            className="project-link project-link-details"
                                        >
                                            Show Details
                                        </button>
                                    )}
                                    {getDisplayLink(project.link) && (
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

            {modalContent && (
                <MarkdownModal
                    project={modalContent}
                    onClose={() => setModalContent(null)}
                />
            )}
        </div>
    );
};

export default WorksPage;
