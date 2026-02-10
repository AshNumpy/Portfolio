import React from 'react';
import './KeycapButton.css';
import { FaImages } from 'react-icons/fa';

const KeycapButton = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        const gallery = document.getElementById('gallery');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button className="keycap-perspective" onClick={handleScroll} aria-label="Go to Portfolio Gallery">
            <div className="keycap-xda-base">
                {/* 3D Sides / Walls */}
                <div className="keycap-side side-front"></div>
                <div className="keycap-side side-right"></div>

                {/* Top Surface */}
                <div className="keycap-top-surface">
                    <div className="keycap-surface-inner">
                        <div className="keycap-noise-overlay"></div>
                        <div className="keycap-highlight-rim"></div>

                        <div className="keycap-icon-container">
                            <FaImages className="keycap-main-icon" />
                            <div className="keycap-backlit-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default KeycapButton;
