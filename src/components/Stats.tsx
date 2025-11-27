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
        <div ref={ref} className="text-4xl md:text-5xl font-black text-white">
            {count}{suffix}
        </div>
    );
};

const Stats = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Subtle background effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/[0.03] blur-[100px] rounded-full" />
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-400/[0.03] blur-[100px] rounded-full" />
                </div>

                <div className="relative">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {stats.map((stat, index) => (
                            <m.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative text-center group"
                            >
                                {/* Subtle border effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent rounded-2xl border border-cyan-400/10 group-hover:border-cyan-400/20 transition-colors" />

                                {/* Content */}
                                <div className="relative p-8">
                                    {/* Animated Number */}
                                    <div className="mb-3">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>

                                    {/* Label */}
                                    <div className="text-zinc-400 text-sm md:text-base font-medium tracking-wide">
                                        {stat.label}
                                    </div>

                                    {/* Subtle accent line */}
                                    <m.div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '60%' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                                    />
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
