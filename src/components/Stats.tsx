'use client';

import { m } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface Stat {
    value: string;
    label: string;
    suffix?: string;
}

const stats: Stat[] = [
    { value: '20', label: 'Clients Across Globe', suffix: '+' },
    { value: '500', label: 'Developers in Talent Pool', suffix: '+' },
    { value: '97', label: 'Client Satisfaction Rate', suffix: '%' },
];

const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const targetValue = parseInt(value);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetValue / steps;
        let current = 0;
        const stepDuration = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                setCount(targetValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, targetValue]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-deep-twilight">
            {count}{suffix}
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6">
                <div className="relative">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {stats.map((stat, index) => (
                            <m.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative py-8 md:py-0 px-4"
                            >
                                {/* Content */}
                                <div className="space-y-2">
                                    {/* Animated Number */}
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />

                                    {/* Label */}
                                    <div className="text-gray-500 text-sm md:text-base font-sans tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
