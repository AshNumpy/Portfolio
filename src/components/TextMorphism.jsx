import React, { useEffect, useRef } from 'react';
import './TextMorphism.css';

const TextMorphism = ({ texts, morphTime = 1, cooldownTime = 0.25 }) => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;

        const elts = {
            text1: text1Ref.current,
            text2: text2Ref.current,
            content: contentRef.current
        };

        if (!elts.text1 || !elts.text2 || !elts.content) return;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];

        function setMorph(fraction) {
            // Auto-scale font size if text is too wide
            const containerWidth = elts.content.offsetWidth;

            const adjustFontSize = (el) => {
                const targetWidth = containerWidth * 0.9; // Account for 5% padding on each side
                el.style.fontSize = '6vw'; // default

                if (el.scrollWidth > targetWidth) {
                    const scale = targetWidth / (el.scrollWidth + 10);
                    el.style.fontSize = `calc(6vw * ${scale})`;
                }
            };

            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            let fractionInverse = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fractionInverse - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fractionInverse, 0.4) * 100}%`;

            elts.text1.textContent = texts[textIndex % texts.length];
            elts.text2.textContent = texts[(textIndex + 1) % texts.length];

            adjustFontSize(elts.text1);
            adjustFontSize(elts.text2);
        }

        function doMorph() {
            // Apply SVG filter during morphing
            elts.content.style.filter = "url(#threshold) blur(0.6px)";

            morph -= cooldown;
            cooldown = 0;

            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        }

        function doCooldown() {
            // Remove SVG filter during cooldown for maximum sharpness
            elts.content.style.filter = "none";

            morph = 0;
            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";
            elts.text1.style.filter = "";
        }
        let animationFrameId;

        function animate() {
            animationFrameId = requestAnimationFrame(animate);

            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }

                doMorph();
            } else {
                doCooldown();
            }
        }

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [texts, morphTime, cooldownTime]);

    return (
        <div className="text-morphism-container">
            <div id="morphism-content" ref={contentRef}>
                <span id="text1" ref={text1Ref}></span>
                <span id="text2" ref={text2Ref}></span>
            </div>

            <svg id="filters" style={{ display: 'none' }}>
                <defs>
                    <filter id="threshold">
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 255 -140" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default TextMorphism;
