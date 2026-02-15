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
        { name: "About", href: "/#about" },
        { name: "Works", href: "/#works" },
        { name: "Gallery", href: "/#gallery" },
        { name: "Contact", href: "/#contact" },
    ];

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
                            className="nav-link-pill"
                            onClick={(e) => {
                                if (isHomePage) {
                                    e.preventDefault();
                                    const element = document.querySelector(link.href.substring(1));
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                        // Update URL without jump
                                        window.history.pushState(null, '', link.href);
                                    }
                                }
                                // If not home page, let the default behavior happen (navigate to /#section)
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
