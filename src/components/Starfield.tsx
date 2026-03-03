'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        const numStars = 1000;
        const stars: {
            x: number;
            y: number;
            z: number; // depth for parallax 1 (close) to 100 (far)
            radius: number;
            color: string;
            alpha: number;
        }[] = [];

        // Distribute star colors for realistic galaxy feel
        const colors = [
            'rgb(255, 255, 255)', // stark white
            'rgb(200, 220, 255)', // bright blue
            'rgb(160, 100, 255)', // deep purple
            'rgb(255, 100, 200)', // vibrant pink
            'rgb(100, 200, 255)', // rich cyan
            'rgb(20, 20, 50)'     // deep space dark blue
        ];

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            targetX = (e.clientX - window.innerWidth / 2) * 0.0005;
            targetY = (e.clientY - window.innerHeight / 2) * 0.0005;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const initStars = (width: number, height: number) => {
            stars.length = 0;
            // Use fallback width/height if 0 to avoid clamping at 0,0 on first react paint
            const w = width || window.innerWidth || 1000;
            const h = height || window.innerHeight || 1000;

            for (let i = 0; i < numStars; i++) {
                // Distribute z logarithmically for depth feel
                const z = Math.random() * 100 + 1;
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    z: z,
                    // Closer stars (lower z) appear larger
                    radius: (Math.random() * 1.5 + 0.5) * (50 / z),
                    color: colors[Math.floor(Math.random() * colors.length)],
                    // Closer stars are brighter
                    alpha: Math.min(1, (100 / z) * 0.8 * Math.random()) + 0.2
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars(canvas.width, canvas.height);
        };

        const animate = () => {
            // Smooth mouse interpolation
            mouseX += (targetX - mouseX) * 0.05;
            mouseY += (targetY - mouseY) * 0.05;

            // Give a slight trailing effect to simulate speed/moving through space
            ctx.fillStyle = 'rgba(5, 5, 15, 0.4)'; // Deeper galaxy background match
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Draw glowing aura for closer/brighter stars
                if (star.z < 30) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = star.color;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

                // Opacity pulses slightly
                const currentAlpha = star.alpha + Math.sin(Date.now() * 0.001 * (100 / star.z)) * 0.2;
                // Parse rgb to rgba 
                const colorBase = star.color.replace('rgb', 'rgba').replace(')', `, ${Math.max(0, Math.min(1, currentAlpha))})`);

                ctx.fillStyle = colorBase;
                ctx.fill();

                // Move star upwards based on its depth (parallax)
                // Closer stars (lower z) move faster
                star.y -= (20 / star.z) * 0.15;
                // Very slow drift to the left
                star.x -= (10 / star.z) * 0.05;

                // Interactive parallax from mouse
                star.x -= mouseX * (100 / star.z);
                star.y -= mouseY * (100 / star.z);

                // Reset position when off-screen
                if (star.y < 0) {
                    star.y = canvas.height;
                    // Keep the same x, just wrap around y to prevent top-left clustering
                    // Alternatively, Randomize X but keep it within the full width
                    star.x = Math.random() * canvas.width;
                }
                if (star.x < 0) {
                    star.x = canvas.width;
                    // Keep the same y, just wrap around x to prevent top-left clustering
                    star.y = Math.random() * canvas.height;
                }
                // Also handle the edge case where parallax pushes them off the right/bottom
                if (star.x > canvas.width) {
                    star.x = 0;
                    star.y = Math.random() * canvas.height;
                }
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none opacity-80"
        />
    );
}
