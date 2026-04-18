'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const pathname = usePathname();
    const useNativeScroll = pathname === '/vibe-coding';

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
        if (isMobile !== false || useNativeScroll) return;

        const lenis = new Lenis({
            duration: 0.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.5,
            touchMultiplier: 2,
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
    }, [isMobile, useNativeScroll]);

    return <>{children}</>;
};

export default SmoothScroll;
