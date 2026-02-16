import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // If not on homepage, immediately set scrolled state for visibility
        if (!isHomePage) {
            setScrolled(true);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const navLinks = [
        { name: "About", href: "/#about", type: "hash" },
        { name: "Works", href: "/#works", type: "hash" },
        { name: "Gallery", href: "/#gallery", type: "hash" },
        { name: "Contact", href: "/#contact", type: "hash" },
    ];

    const isActive = (link) => {
        if (link.type === "page") {
            return location.pathname === link.href;
        }
        return false; // For hash links, strictly speaking, they are only active if we are on home + matching hash, or we can leave them inactive.
    };

    const scrollToTop = () => {
        if (isHomePage) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.location.href = '/';
        }
    };

    return (
        <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div
                    className={`nav-logo ${scrolled || !isHomePage ? 'visible' : ''}`}
                    onClick={scrollToTop}
                >
                    R.E
                </div>
                <div className="nav-links-wrapper">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`nav-link-pill ${isActive(link) ? 'active' : ''}`}
                            onClick={(e) => {
                                if (link.type === 'hash') {
                                    // Logic for hash links (About, Contact)
                                    if (isHomePage) {
                                        e.preventDefault();
                                        const element = document.querySelector(link.href.substring(1));
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                            window.history.pushState(null, '', link.href);
                                        }
                                    }
                                    // If not home page, default behavior (navigate to /#section) works fine
                                }
                                // For page links (Works, Gallery), default behavior (navigate to href) is correct.
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
