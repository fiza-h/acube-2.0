'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        // Detect if device is mobile or has touch
        const checkMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 1024;
            setIsMobile(isTouchDevice || isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only enable Lenis on desktop devices
        if (isMobile !== false) return;

        const lenis = new Lenis({
            lerp: 0.22,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            anchors: true,
            autoRaf: false,
            overscroll: true,
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 1.15,
            touchMultiplier: 1.2,
            prevent: (node) => {
                const element = node as HTMLElement;
                return Boolean(element.closest('[data-lenis-prevent]'));
            },
        });

        let rafId = 0;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, [isMobile]);

    return <>{children}</>;
};

export default SmoothScroll;
