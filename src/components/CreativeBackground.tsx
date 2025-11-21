'use client';

import { useEffect, useRef } from 'react';
import { Timeline, random } from 'animejs';

const CreativeBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const numberOfEls = 50;
        const duration = 6000;
        const delay = duration / numberOfEls;

        const tl = new Timeline({
            duration: delay,
            onComplete: function () { tl.restart(); }
        });

        for (let i = 0; i < numberOfEls; i++) {
            const el = document.createElement('div');
            el.classList.add('absolute', 'pointer-events-none', 'flex', 'items-center', 'justify-center', 'font-mono', 'font-bold');

            // Randomly select a "tech" type
            const type = random(0, 4); // 0: Square, 1: Hexagon, 2: Cross, 3: Binary, 4: Bracket
            const size = random(10, 30);
            const color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(6, 182, 212, 0.4)'; // Blue or Cyan

            el.style.width = `${size}px`;
            el.style.height = `${size}px`;
            el.style.color = color;
            el.style.fontSize = `${size}px`;

            if (type === 0) {
                // Outlined Square
                el.style.border = `1px solid ${color}`;
                el.style.backgroundColor = 'transparent';
            } else if (type === 1) {
                // Hexagon
                el.style.backgroundColor = color;
                el.style.opacity = '0.1'; // Lower opacity for filled shapes
                el.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
            } else if (type === 2) {
                // Cross
                el.innerText = '+';
            } else if (type === 3) {
                // Binary
                el.innerText = Math.random() > 0.5 ? '0' : '1';
                el.style.fontSize = `${size * 0.8}px`;
            } else {
                // Brackets
                el.innerText = Math.random() > 0.5 ? '{' : '}';
                el.style.fontSize = `${size * 0.8}px`;
            }

            container.appendChild(el);

            tl.add(el, {
                translateX: () => random(0, window.innerWidth),
                translateY: () => random(0, window.innerHeight),
                rotate: () => random(0, 360), // Add rotation for tech feel
                scale: [0, random(0.5, 1.5)],
                opacity: [0, random(0.2, 0.6), 0],
                easing: 'easeInOutQuad', // Slightly sharper easing
                duration: random(3000, 5000),
            }, i * 100);
        }

        return () => {
            // Cleanup
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        />
    );
};

export default CreativeBackground;
